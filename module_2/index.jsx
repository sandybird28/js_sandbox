import React from 'react';
import ReactDOM from 'react-dom';
import Start from './Start'
import Step1 from './Step1'
import Step2 from './Step2'




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            s1: false,
            s2: false
        }

        this.user = {}
    }
    step(step){
        this.setState(step)
        console.log(this.state)
    }
    addInfo(user){
        Object.assign(this.user, user)
        console.log(this.user)
    }

    render(){
        return(
            <div>
                {
                    this.state.start
                ?this.state.s1
                    ?<Step2 s2={this.step.bind(this)}/>
                    :<Step1 s1={this.step.bind(this)} user={this.addInfo.bind(this)} />
                :<Start  next={this.step.bind(this)}/>
                }

                
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)