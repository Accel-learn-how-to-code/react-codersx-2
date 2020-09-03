import React, { Component } from 'react';
import classNames from 'classnames';
import './SearchBox.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBox extends Component{
    state = {
        isFocused: false,
        isNonLegit: false
    };

    // checkValue(event){
    //     var x = event.target.value;
    //     if(x.length > 10){
    //         this.setState({
    //             isNonLegit: true
    //         });
    //     }
    // }

    render(){
        
        return(
            <div className="search-container">
                <div className="input-holder">
                    <input 
                        className={classNames('searchBox', {
                            isNonLegit: this.state.isNonLegit === true
                        })} 
                        type="text" placeholder="Type something..." 
                        onChange={(event) => {
                            var x = event.target.value;
                            if(x.length > 10){
                                this.setState({
                                    isNonLegit: true
                                });
                            }
                        }} 
                        onFocus= {() => this.setState({isFocused: true})}
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