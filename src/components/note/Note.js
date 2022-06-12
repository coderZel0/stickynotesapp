import React, { useState,useEffect, useRef } from 'react'
import './note.css';

const Note = ({note,style}) => {
const [title,setTitle] = useState('');
const [content,setContent] = useState('');

const menu = useRef(null);

useEffect(()=>{
if(!note) return;
const {title,description} = note;

setTitle(title);
setContent(description);

},[note])

function handleRightClick(e){
  console.log("riight clickl keli re bhau")
}

useEffect(()=>{
  
},[])

  return (
    <div className='note' style={{background:`radial-gradient(${style.gradient1} 20%,${style.gradient2}) 100%`}}>
        <div className='note__layer'></div>
        <div ref={menu} onContextMenu={(e)=>{console.log("right click")}} className='note__content'>
            <div className='note__title'>{title}</div>
            <div className='note__description'>
                {content}
            </div>
        </div>
        

    </div>
  )
}

export default Note