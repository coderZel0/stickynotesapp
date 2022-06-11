import React, { useEffect, useState } from 'react';
import './panel.css';
import Pane from '../Pane/Pane'

const Panel = ({notes})=>{
    const [todo,setTodo] = useState([]);
    const [inProgress,setInProgress] = useState([]);
    const [done,setDone] = useState([]);

    useEffect(()=>{
        
    },[notes])

    return (
        <div className="panel">
            <div className="layer">
                <Pane/>
                <Pane/>
                <Pane/>
            </div>
        </div>
    )
}


export default Panel;