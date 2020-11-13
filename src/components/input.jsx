import React, {useState} from "react";
import Contacts from "../components/contacts"

let style1 ={
    marginTop : "50px",
    marginRight : "30px"
    
}
let style2 ={
    borderLeft : "none",
    borderRight : "1px solid black"
}
let title = "Title here..."



function Add(){
    let NewContact = new Contacts;
    function Spec(event){
    console.log(event.target.value)
    }

}
function Input(){
    return(
        <div style={style2}>
            <div style={style1} className="form">
            <div className="form-group">
                <label for="title">Title</label>
                <input type="text" className="form-control"  placeholder={title} style={{textAlign : "center"}} required></input>
                </div>
                <div className="form-group">
                <label for="title">message</label>
                <textarea minLength="10"   className="form-control" required/>
                </div>
                <button className="form-control btn btn-primary"   type="submit">submit</button>
            </div>
        </div>
    )
}

export default Input;