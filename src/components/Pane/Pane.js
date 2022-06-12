import React, { useEffect ,useRef} from 'react';
import Note from '../note/Note';
import './Pane.css';



const Pane = ({paneTitle:{Title},notes,style})=> {
    
    const {title,primary} = style;
    const menuRef = useRef();

    const showOptions = (e)=>{
        //e.preventDefault();
        console.log("right clicked");
        const clickX = e.clientX;
        const clickY = e.clientY;
        console.log(clickX)
        console.log(e);
    }

    

    useEffect(()=>{

        document.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
           
        })
        return ()=>{
            document.removeEventListener("contextmenu",(e)=>{
                e.preventDefault();
            })
        }
    },[])

    return(
        <div onContextMenu={(e)=>{showOptions(e)}} className="pane">
            <div ref={menuRef} onClick={(e)=>{showOptions(e)}} className='pane__layer'></div>
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