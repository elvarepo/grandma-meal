import React,{ useState, useEffect} from 'react';
import './Payment.css';
import { useStateValue } from '../contextAPI/StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contextAPI/reducer";
import axios from '../utilities/axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const cardStyle = {
    color: 'white'
}

function Payment() {
    const [{basket}, dispatch] = useStateValue();
    
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        if(basket?.length){
            const getClientSecret = async () => {
                const response = await axios({
                    method: 'post',
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret)
            }
            getClientSecret();
        }
    }, [basket]) 

    const handleChange = event => {
        if(event.complete){
            setDisabled(event.empty);
            setError(event.error ? event.error.message : "");
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
            receipt_email: event.target.email.value,
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            Swal.fire('Payment successfully!')
            navigate('/')
        })
    }
    
    return (
        <div className="payment">
            <div className="payment__section">
                <h2>Payment Method</h2>
                
                <div className="payment__details">

                    <form onSubmit={handleSubmit} >
                        <div className="payment__contact">
                            <input className="payment__input" name='name' type='text' placeholder="Pick Up Name" required/>
                            <input className="payment__input" name='phone' type="tel" placeholder="Contact Number" required/>
                            <input className="payment__input" name='email' type="email" placeholder="Contact Email" required/>
                        </div>
                        <CardElement 
                            className="payment__input" 
                            onChange={handleChange} 
                            options={{style:{base:cardStyle}, hidePostalCode: true }}
                        />

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={Number(getBasketTotal(basket)).toFixed(2)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment

