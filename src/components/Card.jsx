import React from "react";

const Card = (props) => {

    return( 
        <td className="Card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <h4>{props.address}</h4>
            <a href={props.href}>
                <button>View Detail</button>
            </a>
        </td>
    )
}

export default Card;