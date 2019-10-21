// CountrySelect
import React from 'react';
import './country.css'

class List extends React.Component{
    constructor(props){
        super(props);


    }
    render() {
        return(
            <li><img src={this.props.src} /> {this.props.name}</li>
        )
    }
}


export default class CountrySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: ''
        };
        this.list=[];
        
    }
    click(e) {
        console.log('e')
    }

    renderLi(el){
        return (
            <li onClick={this.click}>
                <img class="flag" src={el.flag} alt={`flag of ${el.name}`}/>
                {el.name}
                </li>
        )
    }
    getCountryList(){
        fetch('https://restcountries.eu/rest/v2/all')
            .then((resp)=>resp.json())
            .then((data)=>{
                data.forEach(el => {
                    this.list.push(this.renderLi(el)) 
                });
                console.log(this.list)
            })
            .then(()=>this.setState({list:this.list}))
    }
    render() {
        return(
        <ul 
            dangerouslySetInnerHTML={{__html: this.state.list}}
            style={{maxHeight: this.props.maxHeight}}
        >
            {/* <li onClick={this.click}>aaf</li> */}
            {/* {this.list.forEach(el => {
                this.renderLi(el)
            })} */}
        
        </ul>
            
        )
    }
}

