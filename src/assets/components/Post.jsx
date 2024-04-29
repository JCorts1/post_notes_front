import React from 'react'
import axios from "axios"
import { useState } from 'react'

const Post = ({render}) => {
    const [newNote, setNewNote] = useState({
        name: "",
        text: "",
    });

    function handleSumbit(event) {
        event.preventDefault();
        axios
        .post("http://127.0.0.1:3000/notes", { note: newNote });
        render();
        
    }
  return (
    <div>
        <form onSubmit={handleSumbit} className='w-10/12 h- bg-[#121212] rounded-md flex justify-center'>
        <label className='text-white text-xl font-mono' htmlFor="newName">Title.</label>
        <div className='flex flex-col'>
        <input onChange={(event)=> {
            setNewNote({...newNote, name:event.target.value})
        }} id='newName' className='bg-transparent text-white text-xl w-10/12 h-10 font-mono mt-10' type="text" />
        <textarea onChange={(event)=> {
            setNewNote({...newNote, text:event.target.value})
        }} className='w-10/12 mt-5 bg-transparent text-white font-mono text-lg' name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className='flex items-end'>
        <button type='submit' className='text-xl bg-slate-200 font-mono w-24 h-10 rounded-md'>.post</button>
        </div>
        </form>
    </div>
  )
}

export default Post
