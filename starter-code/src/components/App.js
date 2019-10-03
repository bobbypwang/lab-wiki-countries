import '../stylesheets/App.css';

import { Switch, Route, Link} from "react-router-dom";

import listOfCountries from '../countries.json'
import CountryDetail from './CountryDetail';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    countries : listOfCountries
  }

  showCountryListItems = () => { //show all the foods 
    
    console.log(this.state.countries)
    return this.state.countries.map((eachCountry,i) =>{
      return <Link key={i} className="list-group-item list-group-item-action" to={'/' + eachCountry.cca3}><img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`} alt="" />{eachCountry.name.common}</Link>
      //return <CountryListItem key={i} {...eachCountry} />// name={eachFood.name} calories={eachFood.calories}
    })
  }

  findCountryByCca3 = (cca3) => {
    for ( let country of this.state.countries) {
      if (country.cca3 === cca3) {
        return country
      }
    } return undefined
 }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
          <div className="col-5">
              <div className="list-group" style={{'maxHeight': '90vh', 'overflow': 'scroll'}}>
              {this.showCountryListItems()}
              </div>
            </div>
            <div className="col-7">
            <Switch>
                <Route exact path="/:id" component={(props) =><CountryDetail countryInfo={this.findCountryByCca3(props.match.params.id)} />}/>
            </Switch>
            </div>
          </div>
        </div>
 
      </div>
      
    );
  }
}