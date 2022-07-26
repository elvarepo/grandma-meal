import React, { useState } from 'react';
import './Dish.css';
import { useStateValue } from '../contextAPI/StateProvider';

function Dish({price, name, image,id}) {
    const [ ,dispatch] = useStateValue();
    const [flashClass, setFlashClass] = useState(false);

    const handleClick = event => {
        setFlashClass(true);
        setTimeout(function(){ 
            setFlashClass(false);
        }, 1000);

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
                <p className="dish-name"><strong>{name}</strong></p>
            <div className="dish__info">
                <p><strong>$: {Number(price).toFixed(2)} </strong></p>
                <button  data-tooltip="Added" onClick={handleClick}>Add to Cart</button>
                <p className={ flashClass ? "btn-show" : 'btn-hide'}>Added</p>
            </div>
        </div>
    )
}

export default Dish
