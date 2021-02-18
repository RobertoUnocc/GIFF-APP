import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GIFF = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>Giff Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            
            <ol>
                {
                    categories.map( (cat,i) =>
                        <GifGrid 
                            category={cat} 
                            key   ={cat} 
                        />
                    )
                }
            </ol>
            <div className="t-center">Copyright © 2021  por Roberto Carlos Unocc Sihuinta</div>
        </>
    )
}

export default GIFF
