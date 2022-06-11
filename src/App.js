import React, { useEffect, useState } from 'react';
import './App.css';
import Panel from './components/panel/Panel'
import Head from './components/head/Head';

import {notesData} from './data';

function App() {

  const [notes,setNotes] = useState(notesData);
  const [hide,setHide] = useState(false);

  useEffect(()=>{
    if(!notesData) return;
    console.log(notesData)
    setNotes(notesData);
  },[])

  return (
    <div className="App">
      <Head hide={hide} setHide={setHide}/>
      {notesData && <Panel notes ={notes}/>}
    </div>
  );
}

export default App;
