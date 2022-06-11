import React from 'react';
import './option.css';


const Option = ({option,func})=>{

    return(
        <div onClick={()=>func()} className="option">
            {option}
        </div>
    )
}


export default Option;