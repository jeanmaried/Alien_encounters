import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './flex.css';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class ViewEncounters extends Component{
  constructor(props){
    super(props)
    this.state={encounters: []}
  }

  componentDidMount(){
    axios.get("https://red-wdp-api.herokuapp.com/api/mars/encounters")
      .then((res => {
        const encounters = res.data.encounters;
        console.log(encounters);
        this.setState({ encounters });
    }))
      .catch((error) => {
        console.log(error);
    })
  }

  render(){
    return(
      <div className="box">
        <div className="flex direction-row justify-between">
          <Link to="/report" ><div>&larr; Prev</div></Link>
          <Link to="/" ><div>Home</div></Link>
          <div></div>
        </div>
      <ul id="encounters">
        {this.state.encounters.map(encounter =>
            <li key={encounter.id} className="flex text-align">{encounter.atype} {encounter.action} {encounter.date}</li>
            )}
      </ul>
      </div>
    )
  }
}

export default ViewEncounters;