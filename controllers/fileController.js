const handleFileUpload = (req, res) => {

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
  

    const fileInfo = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    };
  
    res.json(fileInfo);
  };
  
  module.exports = { handleFileUpload };
  