import React from "react";
import FileUploader from "./FileUploader";

const Header = () => {
  return (
    <header className="header">
      Search
      <div className="header-wrapper">
        <FileUploader />
      </div>
    </header>
  );
};

export default Header;
