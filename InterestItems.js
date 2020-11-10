import React, { Component } from "react";
import "../assets/css/styles1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InterestItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
        return <div className="list" key={item.key}>
            <p>{item.text}
            <span> 
                <FontAwesomeIcon className="faicons" 
                icon='trash'
                onClick={ () => props.deleteItem(item.key)
                }/>
            </span>
            </p>
        </div>
        })
    return(
        <div>
            {listItems}
            </div>
    )
}

export default InterestItems;