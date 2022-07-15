import React from 'react'
import './Dish.css';
import { useStateValue } from '../contextAPI/StateProvider';

function Dish({price, name, image,id}) {
    const [ ,dispatch] = useStateValue();
    const handleClick = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                name: name,
                price: price,
                image:image
            }
        })
    }
    return (
        <div className='dish'>
            <div className='dish__image'>
              <img src={image} alt="dish"/>
            </div>
            <div className='dish__middle'>
                <p><strong>{name}</strong></p>
                <p className='flash'>Item Added</p>
            </div>
            <div className="dish__info">
                <p><strong>$: {Number(price).toFixed(2)} </strong></p>
                <button onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Dish
