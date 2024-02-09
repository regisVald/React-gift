import React, { useState }  from 'react'
import { AddCategory } from './Components/AddCategory';
import { Giftgrid } from './Components/giftRead';

export const GitfExpertApp = () =>{
    const [categories,setCategories] = useState(['One puch']);

    // const handledAdd = () => {
    //     setCategories([...categories, 'One piece'])
    // }
    return (
        <>
            <h2>Hello GitfExpert</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map((category, i) => 
                        <Giftgrid 
                            category={category}
                            key={category}/>
                    )
                }
            </ol>
        </>
    )
}