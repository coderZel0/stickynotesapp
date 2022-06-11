import React from 'react';
import Note from '../note/Note';
import './Pane.css';


const Pane = ({paneTitle:{Title},notes,style})=> {
    
    const {title,primary} = style;

    return(
        <div className="pane">
            <div className="pane__title" style={{background:`radial-gradient(${title.gradient1},${title.gradient2})`,color:`${primary}`}}>{Title}</div>
            <div className="pane__content">
                <div className='content__inner'>
                    {notes && <Note note={notes[0]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[0]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[0]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[0]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                    {notes && <Note note={notes[1]}/>}
                </div>
                
            </div>
        </div>
    )
}

export default Pane;