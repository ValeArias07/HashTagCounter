import React from "react";
import './css/custom.css';
import Form from './Form.js';

const Header =()=>{
    return(
        <div id='header'>
                HashTag Counter 
        </div>
    )
}

export function App(){
    return (
        <div id='main'>
            <Header />
            <div className='principal'>
                <Form className="hashText"/>
            </div>
        </div>
     );
}
