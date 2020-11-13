import React from "react";

let style ={
    borderRadius : "50%",
    height : "100px",
    width : "100px",
    border : "5px solid orangered"
}
function Card(props){
    return(
        <div > 
          <img style={style} src={props.imageUrl}></img>
        </div>
    )
  
}
export default Card;