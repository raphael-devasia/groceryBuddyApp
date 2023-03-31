import { useState } from "react";

const SingleItem = ({ item, status, deleteItem, editItems }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.status}
        onChange={() => {
          editItems(item.id);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.status && "line-through",
        }}
      >
        {item.item}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
