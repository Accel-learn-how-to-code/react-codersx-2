import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './TabMenu.css';

function TabMenu({items}){
    return (
        <div className="tab-menu-container">
            <div className="item-list">
                {
                    items.map(x => (
                        <div className="item">
                            <div className="icon-holder">
                                <FontAwesomeIcon icon={x.icon} />
                            </div>
                            <div className="detail">{x.label}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TabMenu