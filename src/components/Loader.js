import React from "react";

function Loading() {
  return (
    <div className="spinner-container">
      <div className="lds-dual-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
