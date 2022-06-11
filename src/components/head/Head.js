import React from 'react';
import './Head.css';


const Head = ({hide,setHide})=>{

    return (
        <div className='head'>
            <div className='head_inner_container'>
                <div className="logo">STICKY NOTES</div>
                <div className='search_container'>
                    <div className='search_inner_container'>
                        <div className='search_icon'>
                            <i className="fas fa-search"></i>
                        </div>
                        <div className='search_input'>
                            <input placeholder='search notes here...'></input>
                        </div>
                    </div>
                </div>
                <div className="archive_container">
                    <button onClick={()=>{setHide(!hide)}} className="archive_Toggle">{(hide)?"UnHide":"Hide"}</button>
                </div>
            </div>
        </div>
    )
}

export default Head;