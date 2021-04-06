import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import PDF from "react-pdf-js";
import axios from "axios";
import uploadedPdfFile from "./../uploads/uploadedFile.pdf";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);

  const onDocumentComplete = (pages) => {
    setPage(1);
    setPages(pages);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const renderPagination = () => {
    return (
      <div className="text-center mt-4">
        <button
          disabled={page === 1}
          className="mr-4 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l transition-all duration-300 ease-out"
          onClick={handlePrevious}
        >
          {" "}
          <i class="fas fa-arrow-circle-left"></i> Prev
        </button>
        <button
          disabled={page === pages}
          className="focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r transition-all duration-300 ease-out"
          onClick={handleNext}
        >
          {" "}
          <i class="fas fa-arrow-circle-right"></i> Next
        </button>
      </div>
    );
  };

  let pagination = null;

  if (pages) {
    pagination = renderPagination();
  }

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({
        fileName,
        filePath,
      });
      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  if (uploadedFile) {
    return (
      <div>
        <div className="text-center mb-1">
          <span className="">Uploaded File</span> - Page{" "}
          <span className="">{page}</span> of <span className="">{pages}</span>
        </div>
        <div style={{ height: "730px", width: "595px", margin: "0 auto" }}>
          <PDF
            className="border-2 border-blue-400 shadow-lg rounded-lg"
            file={uploadedPdfFile}
            page={page}
            onDocumentComplete={onDocumentComplete}
          />
        </div>
        {pagination}
      </div>
    );
  } else {
    return (
      <Fragment>
        {message ? <Message msg={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>
          <Progress percentage={uploadPercentage} />
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
      </Fragment>
    );
  }
};

export default FileUpload;
