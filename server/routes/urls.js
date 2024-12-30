const express = require("express");
const {handleGenerateShortUrl, handleGetAnalytics, handleGetShortUrl} = require('../controllers/url')
const router = express.Router()


router.post('/', handleGenerateShortUrl)
router.get('/:shortId', handleGetShortUrl)
router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router