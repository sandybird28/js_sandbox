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
            <div className="Name">
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
            <div className="Userame">
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
            <div className="Country">
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
            <div className="Userame">
                Age
                <input 
                    type="text"
                    onChange={(e)=>{this.props.d("age", e.target.value)}} 
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
            bColor: ''
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
                    //console.log('OK')        
                    this.props.s1({s1: true})
                    this.props.user(this.user)


                } else{
                    //console.log('NO')        
                    this.setState({bColor: 'red'})
                }
            })


    }
    render(){
        return(
            <div>
                step 1
                <Name name={this.addToUser.bind(this)}/>
                <Userame 
                    username={this.addToUser.bind(this)}
                    validU={this.state.validU} 
                />
                <Age d={this.addToUser.bind(this)}/>
                <Country d={this.addToUser.bind(this)}/>

                <button 
                    className="start"
                    onClick={this.onClick.bind(this)}
                >
                    next step
                </button>
            </div>
        )
    }
}
