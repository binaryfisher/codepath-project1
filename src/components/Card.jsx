import React from "react";

const Card = (props) => {

    return( 
        <td className="Card">
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <h4>{props.category}</h4>
            <a href={props.href}>
                <button>View Menu</button>
            </a>
        </td>
    )
}

export default Card;