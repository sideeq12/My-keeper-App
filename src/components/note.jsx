import React from "react";
import Card from "./text"

let style ={
    padding : "10px",
    backgroundColor : "white",
    border : "thin",
    boxShadow : "2px 2px 2px black",
    width : "200px",
    borderRadius : "5px",
    margin : "5px",
    width : "fit-content"
}

function Note(props){
    return(<div style={style}>
        <Card  imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <h1>{props.name}</h1>
        <p>{props.message}</p>
        </div>
    )
}
export default Note;