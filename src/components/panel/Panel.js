import React, { useEffect, useState } from 'react';
import './panel.css';
import Pane from '../Pane/Pane'

const Panel = ({notes})=>{
    const [todo,setTodo] = useState([]);
    const [inProgress,setInProgress] = useState([]);
    const [done,setDone] = useState([]);

    useEffect(()=>{
        const todoArr = [];
        const progressArr =[];
        const doneArr = [];

        notes.forEach(element => {
            if(element.pane === "todo"){
                todoArr.push(element);
            }
            else if(element.pane === "inProgress"){
                progressArr.push(element);
            }
            else{
                doneArr.push(element);
            }
        
        setTodo(todoArr);
        setInProgress(progressArr);
        setDone(doneArr);
            
        });
    },[notes])

    return (
        <div className="panel">
            <div className="panel__layer">
            </div>
            <div className="panel__panes">
                <Pane/>
                <Pane/>
                <Pane/>
            </div>
        </div>
    )
}


export default Panel;