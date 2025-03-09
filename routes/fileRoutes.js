const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerConfig");
const { handleFileUpload } = require("../controllers/fileController");

router.post("/fileanalyse", upload.single("upfile"), handleFileUpload);

module.exports = router;
