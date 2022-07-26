import "@stripe/stripe-js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'; 

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <div className="app">
          <Header />
          <Routes>
              <Route path='/payment' element={
                <Elements stripe={stripePromise}>
                    <Payment />
                </Elements>          
              } >
              </Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="contact" element={<Contact/>}></Route>
            <Route path="/" element={<Home />}> </Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
