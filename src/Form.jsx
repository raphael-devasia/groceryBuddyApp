import { useState } from "react";
import {toast } from "react-toastify";

const Form = ({ addNewItem }) => {
  const [newItems, setNewItems] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItems) {
      addNewItem(newItems);
      setNewItems("");
      return;
    }
    toast.error("Please give a valid entry");
    return;
  };

  return (
      <form className="color-form" onSubmit={handleSubmit}>
      <h4>Grocery Buddy</h4>
    <div className="form-control">
      
        <input
          type="text"
          className="form-input"
          value={newItems}
          onChange={(event) => setNewItems(event.target.value)}
        />

        <button className="btn" type="submit">
          submit
        </button>
    </div>
      </form>
  );
};
export default Form;

// . If the form is submitted with an empty value, log a message and return.
