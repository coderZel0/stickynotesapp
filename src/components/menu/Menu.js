import React from 'react';
import './menu.css';
import Option from '../option/Option'


const Menu = ({options})=>{
    const len = options.length;
    return(
        <div className="menu">
            {options.map((option,index)=>{
                if(index<len-1){
                    return <Option key={index} option={option} func={}/>
                }
                else{
                    return <Option key={index} option={option} >
                        <Menu/>
                    </Option>
                }
            })}
        </div>
    )
}

export default Menu;