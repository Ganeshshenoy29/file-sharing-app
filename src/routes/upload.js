const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

// upload endpoint
router.post("/", upload.single("file"), (req, res) => {

    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const filename = req.file.filename;

    res.json({
        message: "File uploaded successfully",
        downloadLink: `http://localhost:3000/file/${filename}`
    });
});

module.exports = router;