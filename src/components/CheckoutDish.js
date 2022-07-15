import React from 'react'
import './CheckoutDish.css';
import { useStateValue } from '../contextAPI/StateProvider';

function CheckoutDish({image, name, price, id}) {
    const [,dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className='checkoutDish'>
            <div className='checkoutDish__n'>
                <img className='checkoutDish__image' alt="single dish" src={image}/>
                <div className="checkoutDish__info">
                    <p className="checkoutDish__title">{name} </p>
                    <p className="checkoutDish__price">
                        <small>$</small>
                        <strong > {Number(price).toFixed(2)} </strong>
                    </p>
                    <button onClick={removeFromBasket} >Removeing from basket</button> 
                </div>
            </div>
        </div>
    )
}

export default CheckoutDish
