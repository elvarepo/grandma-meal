import React from 'react'
import './Checkout.css';
import { useStateValue } from '../contextAPI/StateProvider';
import CheckoutDish from './CheckoutDish';
import Sumtotal from './Sumtotal';


function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            { basket?.length === 0 ? (
                <h2>Your Shopping Cart is empty</h2>
            ):(
                <div className='checkout__list'>
                    <h2>Your Shopping Cart</h2>
                    {basket?.map(item => (
                        <CheckoutDish 
                            id={item.id}
                            key={item.name + Math.random()}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            )
            }
            <hr/>
            <div className="checkout__right">
                <Sumtotal 
                />
            </div>
        </div>
    )
}

export default Checkout
