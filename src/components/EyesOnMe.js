// Code EyesOnMe Component Here
import React from 'react'

function buttonFocus() {
    console.log('Good!')
}

function buttonBlur() {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
    return (
        <button onFocus={buttonFocus} onBlur={buttonBlur}>Eyes on me</button>
    )
}

export default EyesOnMe
