import axios from "axios";
import React from "react";

const Delete = ({ id, render }) => {
  function handleDelete() {
    console.log("Deleting Object with Id: ", id);
    axios
      .delete(`http://127.0.0.1:3000/notes/${id}`)
      .then(() => render())
      .catch((error) => console.log("Error Deleting user:", error));
  }

  return (
    <div>
      <button
        onClick={handleDelete}
      className="text-xl bg-slate-200 font-mono w-24 h-8 rounded-md">
        .Delete
      </button>
    </div>
  );
};

export default Delete;
