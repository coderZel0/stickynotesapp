import React from 'react';
import './Pane.css';

const Pane = ({style})=> {

    const {title:{gradient1,gradient2},primary} = style;

    return(
        <div className="pane">
            <div className="pane__title" style={{background:"linear-gradient(90,gradient1,gradient2)"}}>Title</div>
            <div className="pane__content">
                COntent
            </div>
        </div>
    )
}

export default Pane;