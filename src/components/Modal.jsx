import React, { memo } from "react";

export default memo(function Modal({ children, open, setOpen }) {
  console.log("modall");
  return (
    <div
      className="modal"
      style={{ display: open ? "flex" : "none" }}
      onClick={() => setOpen(false)}
    >
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="modalContent">{children}</div>
      </div>
    </div>
  );
});
