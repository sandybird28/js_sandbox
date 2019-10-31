import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return (
    <div>
      Home
      <br />
        <GhostButton>one</GhostButton>
        <GhostButton>two</GhostButton>
        <GhostButton>three</GhostButton>
      <br/>
      <Link to="/contacts">Go to Contacts</Link>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      Our contacts
      <br />
      <Link to="/">Go to Home</Link>
    </div>
  );
}


function Color(props) {
  const color = props.match.params.color
  return (
    <div
      style={{
        backgroundColor: color,
        height: "30vh",
        textAlign: "center"
      }}
    >
      Colored background
      </div>
  );
}

function NotFound() {
  return (
    <div>
      404
      <Link to="/">Go to Main</Link>
    </div>
  );
}


class BinPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      err: null,
    }
    this.id = props.match.params.id;
    this.update = (new URLSearchParams(window.location.search)).get('update'); 
  }
  componentDidMount() {
    if(this.update){

       fetch(`https://api.jsonbin.io/b/${this.id}`, {
          method : 'PUT',
          headers: {
              'Content-type': 'application/json',
              versioning: 'true'
          },
          body: this.update
        })
        .then(resp=>resp.json())
        .then(data=>{
          data.message
            ? alert(data.message)
            : (alert('Successful update!'),
            fetch(`https://api.jsonbin.io/b/${this.id}/latest`)
        .then( resp => resp.json())
        .then( data => {
          console.log(JSON.parse(this.update))
          this.setState({
            bin: data,
          })
        })
        .catch( err => this.setState({
          err,
        })))
        })
      }else {fetch(`https://api.jsonbin.io/b/${this.id}/latest`)
        .then( resp => resp.json())
        .then( data => {
          console.log(JSON.parse(this.update))
          this.setState({
            bin: data,
          })
        })
        .catch( err => this.setState({
          err,
        }))
      }
  }

  render(){
    const {bin} = this.state
    return(
      <div>
      Bin id: {this.id}
      <br />
      {JSON.stringify(bin, null, '\t')}
      <br />
      <Link to="/" >Go to Main</Link>
    </div>
    )
  }
}


function MyButton(props) {
  return <button {...props}>{props.children}</button>
}

function  ghostHOC(ChildComponent){
  return function ghost(props){
    return(
      <ChildComponent
        {...props}
        onClick={(e)=>{
          e.persist()
          e.target.disabled = true;
          setTimeout(()=>{ e.target.disabled = false},2000,e)
        }}
      />
    )
  }
}

const GhostButton = ghostHOC(MyButton);
// const GhostLink = ghostHOC(Link);


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacts" exact component={Contacts} />
      <Route
        path="/color/:color"
        exact
        render={(props) => <Color {...props} />}
      />
      <Route
        path="/bin/:id"
        exact
        render={(props) => <BinPage {...props} />}
      />
      <Route path="*" component={NotFound} />
    </Switch>

  </Router>,
  document.getElementById('root'),
)


