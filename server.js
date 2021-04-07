const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");

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

app.get('/get-upload', (req, res) => {
  pdfParse(`${__dirname}/client/src/uploads/uploadedFile.pdf`).then(function (data) {
    return res.status(200).json({ uploadedText: data })
  })
})

app.listen(5000, () => {
  console.log(`Server started!`);
});
