import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { countContext } from '../App';
import Button from './Button';


const Cart = () => {
    const contextCount = useContext(countContext);
    console.log(contextCount)
    
    let num = contextCount[0]
    console.log(num)


    const [count, setCount] = useState(num)
    
    
    function handleClickRemoveItem() {
        setCount((prev) => prev -=1)
        console.log(count)
    }

    useEffect(() => {
        if (count < 1) {
            setCount(0);
            
        }
        
        }
    , [count])

    

    return (
        <div>
            <Button name = "Ta bort" onClicked = {handleClickRemoveItem} />
            <h2>HEllo from Cart + {count} </h2>
            
        </div>
    )
}

export default Cart
