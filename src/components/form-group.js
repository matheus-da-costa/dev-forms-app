import React from 'react'

import '../css/custom.css'

function FormGroup(props){
    return(
        <div className="Form-group">
            <label htmlFor={props.htmlFor} className="label">{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormGroup; 