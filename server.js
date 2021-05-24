const fs = require("fs");
const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post(`/upload`, (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ message: `No file was uploaded` });
  }

  const file = req.files.file;
  const uploadedFileId = uuidv4();

  file.mv(
    `${__dirname}/client/src/uploads/uploadedFile-${uploadedFileId}.pdf`,
    (err) => {
      if (err) {
        console.error(error.message);
        return res.status(500).send(error.message);
      }
      res.json({
        fileName: `${uploadedFileId}`,
        filePath: `./../uploads/uploadedFile-${uploadedFileId}.pdf`,
      });
    }
  );

  const fileData = JSON.parse(
    fs.readFileSync(`${__dirname}/client/src/data/fileData.json`)
  );
  fileData.push({
    id: uploadedFileId,
  });
  fs.writeFileSync(
    `${__dirname}/client/src/data/fileData.json`,
    JSON.stringify(fileData, null, 2)
  );
});

app.get("/get-upload", (req, res) => {
  pdfParse(`${__dirname}/client/src/uploads/uploadedFile.pdf`).then(function (
    data
  ) {
    return res.status(200).json({ uploadedText: data });
  });
});

app.get("/numoffiles", (req, res) => {
  fs.readdir("./client/src/uploads", (err, files) => {
    console.log(files.length);
    return res.status(200).json({ numOfFiles: files.length });
  });
});

app.listen(5000, () => {
  console.log(`Server started!`);
});
