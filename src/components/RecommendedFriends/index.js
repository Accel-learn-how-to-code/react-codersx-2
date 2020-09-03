import React from 'react';
import './RecommendedFriends.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import FollowFriendListItem from '../FollowFriendListItem/index';

function RecommendedFriends(props){
    return(
        <div className="RecommendedFriends-container">
            <div className="RecommendedFriends">
                <h1>Accounts</h1>
                <hr />
                {
                    props.friends.map((x, index) => <FollowFriendListItem key={index} id={index} name={x.name} email={x.email} icon={faTrashAlt}/>)
                }
            </div>
        </div>
    );
}

export default RecommendedFriends