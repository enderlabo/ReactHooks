import React, { useState, useEffect } from 'react'

import './effect.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ form, setForm ] = useState({
        name: '',
        email: ''
    });

    const { name, email } = form;

    useEffect( () => {
        console.log('RENDER')
    }, []);

    useEffect( () => {
        console.log('RENDER EMAIL')
    }, [email]); // useEffect individualmente.

    const handleInput= ({ target }) =>{
    
        setForm({
            ...form,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h2>Simple Form</h2>
            <hr/>

            <div className="form-group" >
                <input type="text" name="name"
                className="form-control"
                placeholder="Name"
                autoComplete="off"
                value={ name }
                onChange={ handleInput } />

            </div>

            <div className="form-group" >
                <input type="text" name="email"
                className="form-control"
                placeholder="Email"
                autoComplete="off"
                value={ email }
                onChange={ handleInput } />

            </div>

            { (name === '123' && <Message />) }
        </>
    )
}
