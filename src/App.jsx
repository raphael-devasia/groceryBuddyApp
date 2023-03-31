import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const Apps = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || "[]"
  );

  

  const deleteItem = (id) => {
    const newList = items.filter((newlist) => newlist.id !== id);
    setItems(newList);
    setLocalStorage(newList);
    toast.success("Item Deleted successfully");
  };

  const addNewItem = (item) => {
    const newItem = { id: nanoid(), status: false, item: item };
    const newValues = [...items, newItem];
    setItems(newValues);
    setLocalStorage(newValues);
    toast.success('New item Addded ')
  };
   const editItems = (itemId) => {
     const newItems = items.map((item) => {
       if (item.id === itemId) {
         const newItem = { ...item, status: !item.status };
         return newItem;
       }
       return item;
     });
     setItems(newItems);
     setLocalStorage(newItems);
   };

  return (
    <section className="section-center">
      <Form addNewItem={addNewItem} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Items items={items} deleteItem={deleteItem} editItems={editItems} />
    </section>
  );
};
export default Apps;
