const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

// upload endpoint
router.post("/", upload.single("file"), (req, res) => {

    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const filename = req.file.filename;

    // ✅ FIX: use environment-based base URL
    const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

    res.json({
        message: "File uploaded successfully",
        downloadLink: `${BASE_URL}/file/${filename}`
    });
});

module.exports = router;
