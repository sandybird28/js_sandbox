import React from 'react';


 export default class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onClick(){
        this.props.onProgChange(<Start />)
    }
    render(){
        return(
            <div>
                step 2
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
