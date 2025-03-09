const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fileRoutes = require("./routes/fileRoutes");

const app = express();


app.use(cors());
app.use(express.static("public")); 

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use("/api", fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

