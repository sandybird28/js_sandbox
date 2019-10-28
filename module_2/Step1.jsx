import React from 'react';

class Name extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valid: false,
        }
    }
    validation(e){
        const condition = e.target.value && e.target.value !== '  ' && e.target.value.length > 2
        this.setState({
            valid: condition ? true : false
        });
        if(condition){
            this.props.name("name", e.target.value)
        }

    }
    render(){
        return(
            <div className="inp">
                Name
                <input 
                    type="text"
                    style={{
                        borderBottomColor:  
                            this.state.valid
                            ?'green'
                            :'red'
                    }}
                    onChange={this.validation.bind(this)} 

                >

                </input>
            </div>
        )
    }
}
class Userame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false
        }
    }
    validation(e){
        const condition = e.target.value && e.target.value !== '  ' && e.target.value.length > 2
        this.setState({
            valid: condition ? true : false
        });
        if(condition){
            this.props.username("username", e.target.value)
        }
    }
    render(){
        return(
            <div className="inp">
                Userame
                <input 
                    required 
                    type="text"
                    style={{
                        borderBottomColor: 
                        this.state.valid 
                            ?'green'
                            :'red'
                        }}
                    onChange={this.validation.bind(this)} 
                >

                </input>
            </div>
        )
    }
}
class Country extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="inp">
                Country
                <input 
                    type="text"
                    onChange={(e)=>{this.props.d("country", e.target.value)}} 
                >

                </input>
            </div>
        )
    }
}
class Age extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className="inp">
                Age
                <input 
                    type="text"
                    onChange={(e)=>{
                        this.props.d("age", Number(e.target.value))
                    }} 
                >

                </input>
            </div>
        )
    }
}




export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.user = {
            name: '',
            username: '',
            country: '',
            age: '',
        }
        this.state = {
            validU: ''
        }
    }
    addToUser(k,v){
           this.user[k] = v

    }
    onClick(){
        fetch(`https://authserver.worldthirteen.now.sh/check_username?username=${this.user.username}`)
            .then( response => response.json())
            .then(data =>{
                console.log(data)
                if(data.status == 'OK'){
                    this.setState({validU: ""})
                    this.props.s1({s1: true})
                    this.props.user(this.user)


                } else{
                    this.setState({validU: data.error ? data.error: 'This username is taken'})
                }
            })
            .catch(err=>this.setState({validU: err}))


    }
    render(){
        return(
            <div 
                hidden={this.props.hidden} 
                className="step"
            >
                
                <Name name={this.addToUser.bind(this)}/>
                <Userame 
                    username={this.addToUser.bind(this)}
                    valid={this.state.validU}
                />
                {this.state.validU? <div>{this.state.validU}</div>: null}
                <div className="container">
                    <Age d={this.addToUser.bind(this)}/>
                    <Country d={this.addToUser.bind(this)}/>
                </div>
                <button 
                    className="next"
                    onClick={this.onClick.bind(this)}
                >
                    next step
                </button>
            </div>
        )
    }
}
