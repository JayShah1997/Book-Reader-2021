const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post(`/upload`, (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ message: `No file was uploaded` });
  }

  const file = req.files.file;
  file.mv(`${__dirname}/client/src/uploads/uploadedFile.pdf`, (err) => {
    if (err) {
      console.error(error.message);
      return res.status(500).send(error.message);
    }

    res.json({ fileName: file.name, filePath: `/uploads/uploadedFile.pdf` });
  });
});

app.listen(5000, () => {
  console.log(`Server started!`);
});
