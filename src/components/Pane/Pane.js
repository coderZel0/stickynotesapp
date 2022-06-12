import React, { useEffect } from 'react';
import Note from '../note/Note';
import './Pane.css';


const Pane = ({paneTitle:{Title},notes,style})=> {
    
    const {title,primary} = style;

    const showOptions = (e)=>{
        if(e.button === 1) console.log("cmenu");
        const clickX = e.nativeEvent.offsetX;
        const clickY = e.nativeEvent.offsetY;
        console.log(clickX)
    }
    useEffect(()=>{
        document.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            console.log(e.pageX);
        })
        return ()=>{
            document.removeEventListener("contextmenu",(e)=>{
                e.preventDefault();
            })
        }
    },[])

    return(
        <div className="pane">
            <div onContextMenu={(e)=>{showOptions(e)}} className='pane__layer'></div>
            <div className="pane__title" style={{background:`radial-gradient(${title.gradient1},${title.gradient2})`,color:`${primary}`}}>{Title}</div>
            <div className="pane__content">
                <div className='content__inner'>
                    {notes && <Note style={style.noteStyle} note={notes[0]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[0]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[0]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[0]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                    {notes && <Note style={style.noteStyle} note={notes[1]}/>}
                </div>
                
            </div>
        </div>
    )
}

export default Pane;