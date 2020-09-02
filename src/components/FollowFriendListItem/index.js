import React from 'react';
import './FollowFriendListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FollowFriendListItem(props){
    return(
        <div className="items">
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