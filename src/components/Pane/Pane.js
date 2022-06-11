import React from 'react';
import './Pane.css';

const Pane = ({style})=> {
    
    const {title,primary} = style;

    console.log(title.gradient1)
    console.log(style)
    return(
        <div className="pane">
            <div className="pane__title" style={{background:`radial-gradient(${title.gradient1},${title.gradient2})`,color:`${primary}`}}>Title</div>
            <div className="pane__content">
                COntent
            </div>
        </div>
    )
}

export default Pane;