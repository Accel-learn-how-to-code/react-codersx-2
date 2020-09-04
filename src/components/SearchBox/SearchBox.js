import React, { Component } from 'react';
import classNames from 'classnames';
import './SearchBox.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBox extends Component{
    state = {
        fields: {},
        isFocused: false,
        isLegit: true
    };

    isValid(event){
        var x = event.target.value;
        if(x.length >= 10){
            console.log(x.slice(0, 2));
            if(x.slice(0, 3) !== '090'){
                this.setState({
                    isLegit: false
                });
            }
            if(x.length !== 10){
                this.setState({
                    isLegit: false
                });
            }
        }
    }
    render(){
        return(
            <div className="search-container">
                <div className="input-holder">
                    <input 
                        className={classNames('searchBox', {isNonLegit: this.state.isLegit === false})} 
                        type="text" placeholder="Type something..." 
                        onChange={(event) => this.isValid(event)} 
                        onFocus={() => this.setState({isFocused: true})}
                    />
                    <div className={classNames('search', {
                        focus: this.state.isFocused === true
                    })}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default SearchBox