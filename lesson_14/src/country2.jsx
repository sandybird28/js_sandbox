// CountrySelect
import React from 'react';
import './country.css'

export default class CountrySelect extends React.Component {
    constructor(props) {
        super(props);
        this.disabled = props.disabled;
        this.state = {
            list: 'whait...',
            picked: ''
        };
        this.list = [];
        this.getCountryList();

    }

    pick(e) {
        if(!this.disabled){
            this.setState({ picked: e.target });
        }
    }


    getCountryList() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((resp) => resp.json())
            .then((data) => {
                this.list = data.map((el, index) => (
                    <li key={index} onClick={this.pick.bind(this)} style={this.disabled?{cursor:  "not-allowed"}:{cursor: 'pointer'}}>
                        <img className="flag" src={el.flag} alt={`flag of ${el.name}`} /> {el.name}
                    </li>
                ))
            })
            .then(() => this.setState({ list: this.list }))
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.picked){
            
            this.state.picked.classList.toggle("pick");
            if(prevState.picked){
               prevState.picked.classList.toggle("pick");
            } 
            
        }
        
    }

    render() {
        return (
            <ul style={{ maxHeight: this.props.maxHeight }}>
                {this.state.list}
            </ul>
        )
    }
}
