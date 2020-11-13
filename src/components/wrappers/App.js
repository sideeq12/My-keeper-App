import React, {Component} from 'react';
import Headings from "../Header"
import Footer from "../footer"
import Notes from "../note"
import Contacts from "../contacts"
import Input from "../input"


let style ={
    display : "flex",
    flexDirection : "row",
    flexWrap : "wrap",
}
function  CreateCard(Contact){
    return(
        <Notes key={Contacts.key} name={Contact.name} message={Contact.message}/>
    )
}
function App(){
    return(
    <div>
    <Headings  className="row"/>
    <div className="col-lg-4">
        <Input />
    </div>
    <div className="col-lg-8" style={style}>
    {Contacts.map(CreateCard)}
    </div>
    <Footer />
         </div>)
    
}

export default App;
