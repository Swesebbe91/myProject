import React, { useState } from 'react';
import './Cart.css';
import { useContext, useEffect } from 'react';
import { countContext } from '../App';
import Button from './Button';
import Form from './Components/Form';

const Cart = () => {
    const [count, setCount] = useContext(countContext);
    
    function handleClickRemoveItem() {
        setCount((prev) => prev -=1)
       
    }

    function handleClickAddItem() {
        setCount((prev) => prev +=1)
    }

    useEffect(() => {
        if (count < 1) {
            setCount(0);
        }
        
        }
    , [count])

    function addForm() {
         for(let i = 0; i < count; i++) {
            return <Form/>
             
         }
    }

    return (
        <div>
        <div className="cart-menu">
            <Button name = "Ta bort" onClicked = {handleClickRemoveItem} />
            <h2>HEllo from Cart + {count} </h2>
            <Button name = "Adda deltagare" onClicked = {handleClickAddItem} />
            </div>
            <div className="form-container">
             {addForm}
        
            </div>
            

        </div>
    )
}

export default Cart
