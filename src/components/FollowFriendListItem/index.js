import React from 'react';
import './FollowFriendListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FollowFriendListItem(props){
    let itemName = 'items'
    let index = Number(props.id);
    if(index === 0 || index % 2 === 0){
        itemName += ' even';
    }
    return(
        <div className= {itemName}>
            <div className="image-container">
                <div className="image"></div>
            </div>
            <div className="title">
                <h2 className="name">{props.name}</h2>
                <p className="email">{props.email}</p>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon icon={props.icon} />
            </div>
        </div>
    );
}

export default FollowFriendListItem