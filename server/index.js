const express = require("express");
const router = require("./routes/urls");
const cors = require('cors')
const { connectMongoDB } = require("./routes/connect");

require('dotenv').config()
const app = express();
const PORT = 3001;

connectMongoDB(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

    const corsOptions = {
        origin: "https://shortly-mern.vercel.app/", // frontend URI (ReactJS)
    }

app.use(cors(corsOptions));
app.use(express.json());
app.use(cors())
app.use(router);


// Start the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
