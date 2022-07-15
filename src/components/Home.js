import React from "react";
import "./Home.css";
import data from '../utilities/articleData';
import Dish from "./Dish";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner__inner">
            <h2>Dear friends and community:</h2>
            <p>Thank you for continue ordering traditional Ghanaian dishes from us for the past year</p>
            <p>Moving forward, please order from our website to avoid any mistake</p>
            <p><strong>Have a blessed day! </strong> Abby</p>
        
        </div>
      </div>
      <div className="menu">
          {Object.keys(data.dishes).map((key) => (
            <Dish 
            key={data.dishes[key].id} 
            id={data.dishes[key].ids}
            name={data.dishes[key].name} 
            price={data.dishes[key].price}
            image={data.dishes[key].image}
            />
          ))
          }
      </div>
    </div>
  );
}

export default Home;
