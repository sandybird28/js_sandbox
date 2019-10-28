import React from 'react';

export default class Start extends React.Component {
    onClick(){
        this.props.next({start :  true})
    }
    render(){
        return(
            <div>
                <img src="#" alt="logo" className="logo"/>
                <h1>Read Books</h1>
                <div className="text">
                    Create your account to get started. After that,
                    you can share books and make friends.
                </div>
                <button 
                    className="start"
                    onClick={this.onClick.bind(this)}
                >
                    next
                </button>
            </div>
        )
    }
}
