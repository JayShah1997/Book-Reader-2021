import React, { Component } from "react";
import PDF from "react-pdf-js";

import englishPdf from "./english-1-20.pdf";

class English extends Component {
  state = {};

  handlePrevious = this.handlePrevious.bind(this);
  handleNext = this.handleNext.bind(this);
  onDocumentComplete = this.onDocumentComplete.bind(this);

  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  handlePrevious() {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext() {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination() {
    return (
      <div className="text-center mt-4">
        <button
          disabled={this.state.page === 1}
          className="mr-4 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l transition-all duration-300 ease-out"
          onClick={this.handlePrevious}
        >
          {" "}
          <i class="fas fa-arrow-circle-left"></i> Prev
        </button>
        <button
          disabled={this.state.page === this.state.pages}
          className="focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r transition-all duration-300 ease-out"
          onClick={this.handleNext}
        >
          {" "}
          <i class="fas fa-arrow-circle-right"></i> Next
        </button>
      </div>
    );
  }

  render() {
    let pagination = null;

    if (this.state.pages) {
      pagination = this.renderPagination();
    }
    return (
      <div>
        <div className="text-center mb-1">
          <span className="font-bold">English</span> - Page{" "}
          <span className="">{this.state.page}</span> of{" "}
          <span className="">{this.state.pages}</span>
        </div>
        <PDF
          className="border-2 border-blue-400 shadow-lg rounded-lg"
          file={englishPdf}
          page={this.state.page}
          onDocumentComplete={this.onDocumentComplete}
        />
        {pagination}
      </div>
    );
  }
}

export default English;
