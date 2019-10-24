import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            access: true,
            border: '',
            disabled: true,
            hidden: true,

            error: ''
          };
    }
    onClick(){
        fetch('https://authserver.worldthirteen.now.sh/login',{
            method: 'POST',
            body: JSON.stringify({
                email: this.email, 
                password: this.password
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            if (data.error) { 
                this.setState({
                    error: data.error,
                    hidden: false,
                })        
            } else {
                this.props.user(data);
                this.setState({access: true})        
                this.props.onAccessChange(this.state.access);
            }

        })
        .catch((err)=>console.log(err))
    }
    validate(event){
        this.email = event.target.value;
        const valid = /\w+@\w\w+\.\w\w+/.test(this.email);

        this.setState({
            border: (valid||this.email.length==0) ? '' : '1px solid red',
            disabled:  this.email && this.password ? false : true,
            hidden: (valid||this.email.length==0) ? true : false,
            error: (valid||this.email.length==0) ? '' : 'Invalid email address'
            
        })

    }


    render() {
        return (
        <div>
            <div className='address'>   
                151 3rd St<br></br>San Francisco, CA 94103
            </div>
            <div 
                className="error"
                hidden={this.state.hidden}
            >
                {this.state.error}
            </div>
            <input 
                className='input' 
                placeholder='Email address' 
                type="text"
                style={{
                    border: `${this.state.border }`,
                  }}
                onChange={this.validate.bind(this)}
            />
            <input 
                className='input' 
                placeholder='Password' 
                type="password"
                onChange={(e)=>{  
                    this.password = e.target.value;
                    this.setState({disabled:  this.email && this.password ? false : true}) 
                }}
            />
            <div className='forgot'>
                Forgot your password?
            </div>
            <button 
                className='button' 
                onClick={this.onClick.bind(this)}
                disabled={this.state.disabled}
            >
                Log In
            </button>
            <div className='account'>
                Don’t have an account?
            </div>
        </div>
    )}
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick(){
        this.props.onAccessChange(false)
    }

    render() {
        return (
        <div><img className='avatar' src={this.props.user.avatar} alt="user's avatar"/>
            <div className="welcome">Welcome back, <span>{this.props.user.name}</span></div>

            <button className='button' onClick={this.onClick.bind(this)}>
                Go to App
            </button>
        </div>
    )}
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            user: {},
        }
    }

    logined(success){
        this.setState({
            success,
          })
    }
    user(data){
        this.setState({
            user: data
          })
    }
    render() {
        return (
        <div className='wrapper'>
            <div className='app-info'>your<br></br> art<br></br> museum</div>

            {this.state.success
                ?<Welcome 
                    onAccessChange={this.logined.bind(this)}
                    user={this.state.user}
                />
                :<Login 
                    onAccessChange={this.logined.bind(this)}
                    user={this.user.bind(this)}
                />}
        </div>
    )}
}


  



ReactDOM.render(
    <App />,
    document.getElementById('root'),
)