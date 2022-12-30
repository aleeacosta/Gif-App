import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputValue = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return; // verificamos que el input tenga al menos mas de un caracter

        onNewCategory( inputValue.trim() )
        setInputValue(''); // Luego de darle enter limpiamos el input
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputValue }
            />
        </form>
    )
}
