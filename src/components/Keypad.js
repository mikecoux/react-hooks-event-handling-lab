// Code Keypad Component Here
import React from 'react'

function inputPassword() {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <input type="password" onChange={inputPassword} />
    )
}

export default Keypad;