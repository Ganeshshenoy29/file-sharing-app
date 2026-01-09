const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "..", "..", "uploads", filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "File not found" });
    }

    res.download(filePath);
});

module.exports = router;