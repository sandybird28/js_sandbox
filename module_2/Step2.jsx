import React from 'react';
import PasswordMask from 'react-password-mask';

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
        };
    }
    validate(e){
        const condition =  /\w+@\w\w+\.\w\w+/.test(e.target.value)
        this.setState({
            valid: condition,
        })
        if(condition){
            this.props.email("email", e.target.value)
        }
    }
    render(){
        return(
            <div className="inp">
                email
                <input 
                    type="text"
                    onChange={this.validate.bind(this)}
                    style={{
                        borderBottomColor: 
                        this.state.valid
                            ?'green'
                            :''
                        }}
                />
            </div>
        )
    }
}

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
        }
    }
    validate(e){
        const condition =  /\w*\d\w*/.test(e.target.value) && e.target.value.length>6
        this.setState({
            valid: condition,
        })
        if(condition){
            this.props.password("password", e.target.value)
        }
    }
    render(){
        return(
            <div className="inp">
                password
                <input 
                    type="text"
                    onChange={this.validate.bind(this)}
                    style={{
                        borderBottomColor: 
                        this.state.valid
                            ?'green'
                            :'red'
                        }}
                />
            </div>
        )
    }
}
class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onChange(e){
        this.props.conf(e.target.value)
    }
    render(){
        return(
            <div className="inp">
                type password again
                <input 
                    type="text"
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}

export default class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.user={}
        this.state = {
            disabled: true
        }
    }
    onClick(){
        const body = Object.assign(this.user, this.props.user)
        console.log(body)

       fetch('https://authserver.worldthirteen.now.sh/register',{
            method: 'POST',
            body: JSON.stringify(body)
            })
            .then(resp=>resp.json())
            .then(data=>{
                const res = data.status === 'Success' ? true : false;

                this.props.success({success: res})
                this.props.s2({s2: true})
            })
            .catch(error=>{this.props.err({err: error})})
    
        
    }
    addToUser(k,v){
        this.user[k] = v
    }

    confirmation(conf){
        this.setState({
            disabled: !(this.user.password === conf)
        })
    }
    render(){
        return(
            <div 
                hidden={this.props.hidden}
                className="step"
            >
                
                <Email email={this.addToUser.bind(this)}/>
                <Password password={this.addToUser.bind(this)} />
                <Confirmation conf={this.confirmation.bind(this)} />
                <button 
                    className="next"
                    onClick={this.onClick.bind(this)}
                    disabled = {this.state.disabled}
                >
                    sign up
                </button>
            </div>
        )
    }
}


