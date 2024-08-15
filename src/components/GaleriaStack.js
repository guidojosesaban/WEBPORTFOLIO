import React from "react";

const GaleriaStack = () => {

    const stack = [
        {nombre:'HTML'},
        {nombre:'CSS'},
        {nombre:'BOOTSTRAP'},
        {nombre:'JAVASCRIPT'},
        {nombre:'NODE JS'},
        {nombre:'REACT'},
        {nombre:'EXPRESS'},
        {nombre:'MONGO DB'},
        {nombre:'SQL'},
        {nombre:'GIT'},
        {nombre:'GIT HUB'},
    ]

    return(
        stack.map((elemento) => {
            return(
                 <p className="stackItem">{elemento.nombre}</p>
            )

           
        })
    )
}

export default GaleriaStack;