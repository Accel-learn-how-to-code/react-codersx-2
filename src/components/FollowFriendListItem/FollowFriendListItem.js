import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FollowFriendListItem.css';


function FollowFriendListItem(props){
    const {user, icon} = props;
    let itemName = 'items'
    let index = Number(user.id);
    if(index === 0 || index % 2 === 0){
        itemName += ' even';
    }
    return(
        <div className= {itemName}>
            <div className="image-container">
                <div className="image"></div>
            </div>
            <div className="title">
                <h2 className="name">{user.name}</h2>
                <p className="email">{user.email}</p>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon icon={icon} />
            </div>
        </div>
    );
}

FollowFriendListItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        icon: PropTypes.object
    }),
    icon: PropTypes.object
};

export default FollowFriendListItem