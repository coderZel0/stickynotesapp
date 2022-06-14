import React from 'react';
import './menu.css';
import Option from '../option/Option'


const Menu = ({options})=>{
    const len = options.length;
    return(
        <div className="menu">
            {options && options.map((option,index)=>{
                return <Option key={index} option={option} func={}/>
            })}
        </div>
    )
}

export default Menu;