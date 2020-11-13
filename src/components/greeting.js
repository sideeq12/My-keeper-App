import React from "react";

let year = new Date();
let date = year.getHours()
let greeting;
let style = {
    textAlign : "center"
}
function Greeting(){
    return(
        <p style={style}>{date > 18 ? greeting=<h1 style={{color:"orange"}}>Good evening</h1> : greeting=<h1 style={{color:"blue"}}>Good morning</h1>}</p>

    )
}
export default Greeting;