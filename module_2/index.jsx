import React from 'react';
import ReactDOM from 'react-dom';
import Start from './Start';
import Step1 from './Step1';
import Step2 from './Step2';
import './style.css';
import bulb from './img/bulb.png'
import success from './img/success.png'
import fail from './img/fail.png'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            s1: false,
            s2: false,
            user: {},
            success: false,
            err: ''
        }

    }
    step(step){
        this.setState(step)
    }
    addInfo(user){
        this.setState({user})
    }

    render(){
        return(
            <div className="wrapper">
                <Start  
                    next={this.step.bind(this)} 
                    hidden={this.state.start}/>
                <div 
                    className="main" 
                    hidden={!this.state.start||this.state.s2}
                >
                    <img src={bulb} alt='bulb'/>
                    <h1>Welcome!</h1>
                        Create your account to get started. After that,
                        you can share books and make friends.
                    <Step1 
                        s1={this.step.bind(this)} 
                        user={this.addInfo.bind(this)}  
                        hidden={!this.state.start||this.state.s1} 
                    />
                    <Step2 
                        s2={this.step.bind(this)}
                        success={this.step.bind(this)} 
                        err={this.step.bind(this)}
                        user={this.state.user} 
                        hidden={!this.state.s1||this.state.s2}
                    />
                    <span className='bottomText'>Already have an account? <a href="#">Login</a></span>
                </div>
                {this.state.s2
                    ? this.state.success 
                        ?
                        <div className="success">
                            <img src={success} /><h1>Welcome</h1>
                        </div>
                        :
                        <div className="fail">
                            <img src={fail} /><h1>Fail</h1><div>{this.state.err}</div>
                        </div>
                    :''}
                
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)