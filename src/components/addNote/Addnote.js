import React, { useState } from 'react'
import './addnote.css'

const Addnote = ({setNotes,setShowModal}) => {
    const [note,setNote] = useState({title:'',description:'',archived:false,pane:"todo"});

    const addNote =()=>{
        setNotes(state=>[note,...state]);
        setNote({title:'',description:'',archived:false,pane:"todo"});
        setShowModal(false);
    }


  return (
    <div className='addNoteContainer'>
        <div className='note_details'>
            <div className='feild title'>
                <label htmlFor='title'>Title:</label>
                <div className='input'>
                    <input onChange={(e)=>{setNote(state=>{return{...state,title:e.target.value}})}} type="text" name='title'></input>
                </div>
            </div>
            <div className='feild description'>
                <label htmlFor="desc">Description:</label>
                <div className='input'>
                    <textarea onChange={(e)=>{setNote(state=>{return{...state,description:e.target.value}})}} name='desc'></textarea>
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