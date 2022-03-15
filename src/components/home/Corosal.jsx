import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
//import "./styles.css";

const breakPoints = [{ width: 1, itemsToShow: 1 }];



export const Corosal = ({images}) => {
    const [items, setItems] = useState(images);
   
  return (
    <>
    

  
  
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
     
         {items.map((item) => (
          <Item key={item}><img  style={{width:"100%", height : "100%"}} src={item}/></Item>
        ))} 
           {/* <Item><img style={{width:"100%", height : "100%"}} src={images[0]}/></Item>
           <Item><img  style={{width:"100%", height : "100%"}} src={images[0]}/></Item> */}
      </Carousel>
    </div>
  
  </>
);
  
  
}
