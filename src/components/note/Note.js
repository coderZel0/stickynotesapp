import React, { useState,useEffect } from 'react'
import './note.css';

const Note = ({note}) => {
const [title,setTitle] = useState('');
const [content,setContent] = useState('');

useEffect(()=>{
if(!note) return;
const {title,description} = note;

setTitle(title);
setContent(description);

},[note])
    
  return (
    <div className='note'>
        <div className='note__layer'></div>
        <div className='note__content'>
            <div className='note__title'>{title}</div>
            <div className='note__description'>
                {content}
            </div>
        </div>
        

    </div>
  )
}

export default Note