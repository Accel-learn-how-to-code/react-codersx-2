import React from 'react';
import PropTypes from 'prop-types';
import './RecommendedFriends.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FollowFriendListItem from '../FollowFriendListItem/FollowFriendListItem';

function RecommendedFriends(props){
    const {friends} = props;
    return(
        <div className="RecommendedFriends-container">
            <div className="RecommendedFriends">
            <div className="Recommended-Friends-Header-Container">
                <h1>Accounts</h1>
                <div className="bell">
                    <FontAwesomeIcon icon={faBell}/>
                    {
                        friends.length ? <div className="notic">{friends.length}</div> : null
                    }
                </div>
            </div>
                <hr />
                {
                    friends.map((x, index) => <FollowFriendListItem key={index} id={index} user={x} icon={faTrashAlt}/>)
                }
            </div>
        </div>
    );
}

RecommendedFriends.propTypes = {
    friends: PropTypes.array
};

export default RecommendedFriends