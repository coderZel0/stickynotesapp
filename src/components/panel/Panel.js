import React, { useEffect, useState } from 'react';
import './panel.css';
import Pane from '../Pane/Pane'

const Panel = ({notes,setShowModal,setType})=>{
    const [todo,setTodo] = useState([]);
    const [inProgress,setInProgress] = useState([]);
    const [done,setDone] = useState([]);

    const [todoStyle,setTodoStyle] = useState({title:{gradient1:"#40EFC0",gradient2:"#3648E6"},noteStyle:{gradient1:"rgb(248, 70, 70)",gradient2:"rgb(240, 31, 31)"},primary:"blue"});
    const [progressStyle,setProgStyle] = useState({title:{gradient1:"#E1ED38",gradient2:"#F38E1A"},noteStyle:{gradient1:"#F7F312",gradient2:"#E27B13"},primary:"blue"});
    const [doneStyle,setDoneStyle] = useState({title:{gradient1:"#37EDAA",gradient2:"#3AD034"},noteStyle:{gradient1:"#71EC21",gradient2:"#14D71C"},primary:"blue"});

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
                <Pane paneTitle={{Title:"TO DO"}} notes={todo} style={todoStyle} addNote={true} setShowModal={setShowModal} setType={setType}/>
                <Pane paneTitle={{Title:"IN PROGRESS"}} notes={inProgress} style={progressStyle}/>
                <Pane paneTitle={{Title:"DONE"}} notes={done} style={doneStyle}/>
            </div>
        </div>
    )
}


export default Panel;