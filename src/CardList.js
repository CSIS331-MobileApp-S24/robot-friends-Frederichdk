import React from "react";
import Card from "./Card";
import { robots } from "./robots";


const CardList = ({robots}) => {

    //copy of an array
    const robCopy = robots.map((robots, i) => {

        return (
            <Card key ={i} id = {robots.id} botName= {robots.name} email={robots.email} />
        );  
    });
    
    return <div className = "tc">{robCopy}</div>
};
export default CardList;