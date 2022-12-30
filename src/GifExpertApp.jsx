import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const addCategory = ( newCategory ) => {
        if ( categories.includes( newCategory )) return;
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ addCategory }/>            
            
            {
                categories.map( category => (
                    <GifGrid 
                        category={ category }
                        key={ category } />
                ))
            }            
        </>
    )
}

export default GifExpertApp