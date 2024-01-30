import React from "react";

const Card = ({botName}) => {

    return (

        <div className = "bg-light-green dib br3 ma2 pa3 tc grow">
            <img src={`https://robohash.org/${botName}`} alt= ""/>

            <div>
                <h2>{botName}</h2>
                <p>description</p>
            
            </div>
        
        </div>

    );

};

export default Card;