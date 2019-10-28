import React from 'react';
import logo from './img/logo.png'
import arrow from './img/arrow-left.png'

export default class Start extends React.Component {
    onClick(){
        this.props.next({start :  true})
    }
    render(){
        return(
            <div hidden={this.props.hidden}>
                <img 
                    src={logo} 
                    alt="logo" 
                    className="logo"
                ></img> 
                <h1>Read Books</h1>
                <div className="text">
                    Create your account to get started. After that,
                    you can share books and make friends.
                </div>
                <button 
                    className="start"
                    onClick={this.onClick.bind(this)}
                >
                    <img src={arrow} />
                </button>
            </div>
        )
    }
}
