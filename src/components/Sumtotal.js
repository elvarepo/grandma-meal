import React from 'react';
import './Sumtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../contextAPI/reducer';
import { useStateValue } from '../contextAPI/StateProvider';
import { useNavigate } from 'react-router-dom';

function Sumtotal() {
    const [{basket},] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className='sumtotal'>
            <CurrencyFormat
                renderText={(value)=>(    
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                )}
                decimalScale={2}
                value={Number(getBasketTotal(basket)).toFixed(2)}   
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
             <button onClick={ e => navigate('/payment')} 
                disabled={basket?.length === 0}
             >
                 Proceed to Checkout
            </button>
        </div>
    )
}

export default Sumtotal
