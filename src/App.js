import React, { useEffect, useState } from 'react';
import './App.css';
import Panel from './components/panel/Panel'
import Head from './components/head/Head';

import {notesData} from './data';
import Modal from './components/modal/Modal';
import Addnote from './components/addNote/Addnote';


function App() {

  const [notes,setNotes] = useState(notesData);
  const [hide,setHide] = useState(false);
  const [searchQuery,setQuery] = useState('');
  const [showModal,setShowModal] = useState(false);
  const [modalType,setType] = useState("addNote");


  useEffect(()=>{
    if(!notesData) return;
    console.log(notesData)
    setNotes(notesData);
  },[])

  return (
    <div className="App">
      {(showModal)?(modalType === "addNote")? (<Modal setShowModal={setShowModal}><Addnote/></Modal>):(<Modal setShowModal={setShowModal}/>):null}
      <Head hide={hide} setHide={setHide}/>
      <div className='panel_container'>
        {notesData && <Panel setShowModal={setShowModal} notes ={notes} setType={setType}/>}
      </div>
    </div>
  );
}

export default App;
