import React, { useEffect, useState } from 'react';
import './panel.css';
import Pane from '../Pane/Pane'

const Panel = ({notes})=>{
    const [todo,setTodo] = useState([]);
    const [inProgress,setInProgress] = useState([]);
    const [done,setDone] = useState([]);

    const [todoStyle,setTodoStyle] = useState({title:{gradient1:"#40EFC0",gradient2:"#3648E6"},primary:"blue"});
    const [progressStyle,setProgStyle] = useState({title:{gradient1:"#E1ED38",gradient2:"#F38E1A"},primary:"blue"});
    const [doneStyle,setDoneStyle] = useState({title:{gradient1:"#37DE74",gradient2:"#3AD034"},primary:"blue"});

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
        
        console.log("totdoArr",todoArr);
        console.log("progressarr",progressArr);
        });
    },[notes])

    return (
        <div className="panel">
            <div className="panel__layer">
            </div>
            <div className="panel__panes">
                <Pane style={todoStyle}/>
                <Pane style={progressStyle}/>
                <Pane style={doneStyle}/>
            </div>
        </div>
    )
}


export default Panel;