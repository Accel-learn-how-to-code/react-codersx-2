import React from 'react';
import './RecommendedFriends.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FollowFriendListItem from '../FollowFriendListItem/index';

function RecommendedFriends(props){
    return(
        <div className="RecommendedFriends-container">
            <div className="RecommendedFriends">
            <div class="Recommended-Friends-Header-Container">
                <h1>Accounts</h1>
                <div class="bell">
                    <FontAwesomeIcon icon={faBell}/>
                    {
                        props.friends.length ? <div class="notic">{props.friends.length}</div> : null
                    }
                </div>
            </div>
                <hr />
                {
                    props.friends.map((x, index) => <FollowFriendListItem key={index} id={index} name={x.name} email={x.email} icon={faTrashAlt}/>)
                }
            </div>
        </div>
    );
}

export default RecommendedFriends