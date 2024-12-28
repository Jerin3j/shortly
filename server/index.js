const express = require("express");
const urlRoute = require("./routes/urls");
const cors = require('cors')
const { connectMongoDB } = require("./routes/connect");
const URL = require("./models/url"); // Importing the URL model
const app = express();
const PORT = 3001;

connectMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(express.json());
app.use(cors())
app.use("/", urlRoute);

app.get("/:shortId", async (req, res) => {
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
});

// Start the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
