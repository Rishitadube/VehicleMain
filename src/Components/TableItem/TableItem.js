import React from "react";
import "./TableItem.css";

function TableItem({ children }) {
  return (
    <div className="table-item d-lg-flex align-items-center justify-content-between  border border-1 mx-5 my-2 py-2 px-4 border-dark">
      {children}
    </div>
  );
}

export default TableItem;
