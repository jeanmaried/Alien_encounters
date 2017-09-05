import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './flex.css';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class ReportEncounter extends Component {

  constructor(props) {
    super(props);
    this.state = { action: ''};
    this.state={aliens: []}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.action == null){
      console.log('empty');
    }
    else if(this.state.alien == null){
      console.log('still empty')
    }
    else{
      axios.post("https://red-wdp-api.herokuapp.com/api/mars/encounters", {
      "encounter" : {
          "atype" : this.state.alien,
          "date" : new Date(),
          "action" : this.state.action,
          "colonist_id" : 5
        }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        window.location.replace("http://localhost:3000/view");
    };
  }

  componentDidMount(){
    axios.get("https://red-wdp-api.herokuapp.com/api/mars/aliens")
      .then((res => {
        const aliens = res.data.aliens;
        console.log(aliens);
        this.setState({ aliens });
    }))
      .catch((error) => {
        console.log(error);
    })
  }

  render() {
    return (
      <div className="box">
        <div className="navigate flex direction-row justify-between">
          <Link to="/colonist" ><div>&larr; Prev</div></Link>
          <Link to="/" ><div>Home</div></Link>
          <Link to="/view" ><div>Next &rarr;</div></Link>
        </div>
        <form className="flex direction-column align-items-center">
        <label className="flex direction-column text-align">
          <input type="text" name="action" value={this.state.action} placeholder="Action Taken" onChange={this.handleChange} />
        </label>
        <select name="alien" onChange={this.handleChange} value={this.state.alien}>
          <option value='occupation'>Select Alien</option>
          {this.state.aliens.map(alien =>
              <option value={alien.type}>{alien.type}</option>
              )}
        </select>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </form>
      </div>
    );
  }
}



export default ReportEncounter;



