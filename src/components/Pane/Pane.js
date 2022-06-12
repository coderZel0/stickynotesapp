import React, { useEffect ,useRef} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import Note from '../note/Note';
import './Pane.css';



const Pane = ({paneTitle:{Title},notes,style,addNote,setShowModal,setType})=> {
    
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
        <div className="pane">
            <div ref={menuRef} onContextMenu={(e)=>{showOptions(e)}}  className='pane__layer'></div>
            <div className="pane__title" style={{background:`radial-gradient(${title.gradient1},${title.gradient2})`,color:`${primary}`}}>
                {Title}
            </div>
            <div className="pane__content">
                <div className='content__inner'>
                    {addNote && <Note style={{gradient1:"black",gradient2:"black",opacity:"0.5"}}>
                        <div onClick={()=>{setShowModal(state=>!state);setType("addNote")}} className="addNote">
                            <i style={{fontSize:"28px",color:"white"}} className='fas fa-plus'></i>
                        </div>
                        </Note>}
                    {notes && <Note setType={setType} style={style.noteStyle} note={notes[0]}/>}
                    
                </div>
                
            </div>
        </div>
    )
}

export default Pane;