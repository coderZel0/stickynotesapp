import React, { useState } from 'react'
import './addnote.css'

const Addnote = ({setNotes}) => {
    const [note,setNote] = useState({title:'',desctiption:'',archived:false,pane:"todo"});

    const addNote =()=>{

    }


  return (
    <div className='addNoteContainer'>
        <div className='note_details'>
            <div className='feild title'>
                <label for='title'>Title:</label>
                <div className='input'>
                    <input onChange={(e)=>{setNote(state=>{return{...state,title:e.target.value}})}} type="text" name='title'></input>
                </div>
            </div>
            <div className='feild description'>
                <label for="desc">Description:</label>
                <div className='input'>
                    <textarea name='desc'></textarea>
                </div>
                
            </div>
        </div>
        <div className='addBtn'>
            <button onClick={addNote}>Add Note</button>
        </div>
    </div>
  )
}

export default Addnote