import React, { Component } from 'react';
import classNames from 'classnames';
import './SearchBox.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBox extends Component{
    state = {
        isFocused: false
    };

    checkValue(event){
        var x = event.target.value;
        if(x)
            console.log('123');
    }

    render(){
        const {isFocused} = this.state;
        return(
            <div className="search-container">
                <div className="input-holder">
                    <input id="searchBox" type="text" placeholder="Type something..." onChange={this.checkValue} onFocus= {() => this.setState({isFocused: true})}/>
                    <div className={classNames('search', {
                        focus: isFocused === true
                    })}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default SearchBox