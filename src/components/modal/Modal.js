import React from 'react'
import './modal.css';

const Modal = ({children,setShowModal}) => {
  return (
    <div className='modal'>
        <div className='modal__layer'></div>
        <div onClick={()=>setShowModal(state=>!state)} className='close-modal'>
            <i className='fas fa-times'></i>
        </div>
        <div className='children'>
            {children}
        </div>
        
    </div>
  )
}

export default Modal