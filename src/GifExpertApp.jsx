import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp= () => {
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([...categories, newCategory]);
    };

    return (
        <div>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory 
            onNewCategory={handleAdd}
        />
        <ol>
            {
                categories.map( category => {
                  return <GifGrid key={category} category={category} />;
                })
            }
        </ol>
        </div>
    )
}