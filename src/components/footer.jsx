import React from "react";

let date = new Date();
let year = date.getFullYear()
function Foot(){
    return(
        <h2>Copyright {year}</h2>
    )
}
export default Foot;