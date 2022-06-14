import React, { useState,useEffect, useRef } from 'react';
import Menu from '../menu/Menu';
import './note.css';

const Note = ({note,style,children,onClick}) => {
const [title,setTitle] = useState('');
const [content,setContent] = useState('');
const [showMenu,setShow] = useState(false);

const menu = useRef(null);

useEffect(()=>{
if(!note) return;
const {title,description} = note;

setTitle(title);
setContent(description);

},[note])

function handleRightClick(e){
  console.log("right clickl keli re bhau")
}

const openMenu =()=>{
  setShow(!showMenu);
}

useEffect(()=>{
  
},[])

  return (
    <div onClick={onClick} className='note' style={{background:`radial-gradient(${style.gradient1} 20%,${style.gradient2}) 100%`,opacity:`${style.opacity}`}}>
        {showMenu && <div className="noteMenu"><Menu/></div>}
        <div className='note__layer'></div>
        <div ref={menu} onContextMenu={(e)=>{console.log("right click")}} className='note__content'>
            <div onClick={openMenu} className='option__icon'>
              <i className='fas fa-ellipsis-v'></i>
            </div>
            {children}
            <div className='note__title'>{title}</div>
            <div className='note__description'>
                {content}
            </div>
        </div>
        

    </div>
  )
}

export default Note