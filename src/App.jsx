import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./assets/components/Post";
import Delete from "./assets/components/Delete";

const App = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    render();
  }, []);

  function render() {
    axios.get("http://127.0.0.1:3000/notes").then(function (response) {
      setNote(response.data);
      console.log(response);
    });
  }
  return (
    <div className="w-screen h-screen bg-[#201f1f] flex">
      <div className="w-9/12 h-screen grid grid-cols-3 grid-rows-2">
        {note.map((note) => (
          <div className="w-10/12 h-4/5 bg-[#121212] rounded-md flex flex-col justify-between  mb-10">
            <h2 className="text-white mt-4 ml-4 font-mono">{note.name}</h2>
            <p className="text-white break-all p-4 font-mono">{note.text}</p>
            <div className="flex justify-end">
              <Delete render={render} key={note.id} id={note.id}  />
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/6 h-screen  flex items-center justify-center">
        <Post render={render} />
      </div>
    </div>
  );
};

export default App;
