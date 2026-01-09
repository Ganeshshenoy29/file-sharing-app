const multer = require("multer");
const path = require("path");

// storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});

// file filter (optional security)
const fileFilter = (req, file, cb) => {
    cb(null, true); // allow all for now
};

// multer instance
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100 * 1024 * 1024 // 100 MB
    },
    fileFilter: fileFilter
});

module.exports = upload;
