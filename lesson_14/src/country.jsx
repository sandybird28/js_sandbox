// CountrySelect
import React from 'react';
import './country.css'

export default class CountrySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: ''
        };
        this.list='';
        
        this.getCountryList();
    }
    click(e) {
        console.log('e')
      
    }

    getCountryList(){
        fetch('https://restcountries.eu/rest/v2/all')
            .then((resp)=>resp.json())
            .then((data)=>{
                data.forEach(el => {
                    this.list += `<li><img class="flag" src="${el.flag}" alt="flag of ${el.name}"/> ${el.name}</li>` 
                });
            })
            .then(()=>this.setState({list:this.list}))
    }
    render() {
        return(
        <ul 
            dangerouslySetInnerHTML={{__html: this.state.list}}
            style={{maxHeight: this.props.maxHeight}}
        >
        </ul>
            
        )
    }
}

