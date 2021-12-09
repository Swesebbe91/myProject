import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import { countContext, formContext } from '../App';
import Button from './Components/Button';
import Form from './Components/Form';

const Cart = () => {
    const [count, setCount] = useContext(countContext);
    const [form, setForm] = useContext(formContext);
    

    function handleClickRemoveItem() {
        setCount((prev) => prev -=1)
        removeForm()
    }

    function handleClickAddItem() {
        setCount((prev) => prev +=1)
        addForm()
    }

    useEffect(() => {
        if (count < 1) {
            setCount(0);
        }

        }
    , [count])

    function addForm() {
            const finalArray = [...form, <Form/>]
            setForm(finalArray)
    }

    function removeForm() {
        const finalArray = form
        finalArray.pop()
        setForm(finalArray)
}

    return (
        <div>
        <div className="cart-menu">
            <Button name = "Ta bort" onClicked = {handleClickRemoveItem} />
        
            <Button name = "Adda deltagare" onClicked = {handleClickAddItem} />
            </div>
            <div className="form-container">
            {form.map((item) => (
                item
            ))}
          
            </div>
            

        </div>
    )
}

export default Cart
