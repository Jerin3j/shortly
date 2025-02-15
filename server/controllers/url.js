const shortid = require("shortid");
const URL = require('../models/url');


//method to generate
async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortId = shortid.generate(); // Generate a unique short ID
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.json({ id: shortId });
}

//method to get the short url
async function handleGetShortUrl(req, res){
    const { shortId } = req.params;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } }, // Push visit with a timestamp
            { new: true } // Return the updated document
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error("Error during redirect:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//method to know the how many time clicked on link
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });

    if (!result) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}

module.exports = { handleGenerateShortUrl, handleGetAnalytics, handleGetShortUrl };
