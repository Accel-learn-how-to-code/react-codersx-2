import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './TabMenu.css';

function TabMenu(){
    return (
        <div className="tab-menu-container">
            <div className="item-list">
                <div className="item">
                    <div className="icon-holder one">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className="detail">Home</div>
                </div>
                <div className="item">
                    <div className="icon-holder two">
                        <FontAwesomeIcon icon={faGift} />
                    </div>
                    <div className="detail">Deal</div>
                </div>
                <div className="item">
                    <div className="icon-holder three">
                        <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>
                    <div className="detail">Upload</div>
                </div>
                <div className="item">
                    <div className="icon-holder three">
                        <FontAwesomeIcon icon={faMugHot} />
                    </div>
                    <div className="detail">Work</div>
                </div>
                <div className="item">
                    <div className="icon-holder four">
                        <FontAwesomeIcon icon={faCog} />
                    </div>
                    <div className="detail">Setting</div>
                </div>
            </div>
        </div>
    );
}

export default TabMenu