const express = require("express");
const path = require("path");

// routes
const uploadRoute = require("./routes/upload");
const fileRoute = require("./routes/file");
const downloadRoute = require("./routes/download");

const app = express();
// const PORT = 3000;
const PORT = process.env.PORT || 3000;

app.use(express.json());

// serve public folder
app.use(express.static(path.join(__dirname, "..", "public")));

// routes
app.use("/upload", uploadRoute);
app.use("/file", fileRoute);
app.use("/download", downloadRoute);

app.get("/", (req, res) => {
    res.send("File Sharing App is running ??");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});