import React, { Component } from 'react'

export default class CountryDetail extends Component {

    render() {
        
      console.log(this.props)

        return (
            <React.Fragment>
            <h1>{this.props.countryInfo.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{'width': 30+'%'}}>Capital</td>
                    <td>{this.props.countryInfo.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{this.props.countryInfo.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        <li><a href="/AND">Andorra</a></li>
                        <li><a href="/BEL">Belgium</a></li>
                        <li><a href="/DEU">Germany</a></li>
                        <li><a href="/ITA">Italy</a></li>
                        <li><a href="/LUX">Luxembourg</a></li>
                        <li><a href="/MCO">Monaco</a></li>
                        <li><a href="/ESP">Spain</a></li>
                        <li><a href="/CHE">Switzerland</a></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </React.Fragment>
        )
    }
}
