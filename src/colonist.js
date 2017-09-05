import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './flex.css';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class CreateColonist extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', age: ''};
    this.state={jobs: []}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
      axios.post("https://red-wdp-api.herokuapp.com/api/mars/colonists", {
        "colonist" : {
          "name" : this.state.name,
          "age" : this.state.age,
          "job_id" : this.state.job
        }
        })
        .then(function (response) {
        })
        .catch(function (error) {
          console.log(error);
        });
        window.location.replace("http://localhost:3000/Report");
  }
  

  componentDidMount(){
    axios.get("https://red-wdp-api.herokuapp.com/api/mars/jobs")
      .then((res => {
        const jobs = res.data.jobs;
        this.setState({ jobs });
    }))
      .catch((error) => {
        console.log(error);
    })
  }

  render() {
    return (
      <div className="box">
        <div className="navigate flex direction-row justify-between">
          <Link to="/" ><div>&larr; Prev</div></Link>
          <Link to="/" ><div>Home</div></Link>
          <Link to="/Report" ><div>Next   &rarr;</div></Link>
        </div>
          <form className="flex direction-column align-items-center">
            <label className="flex direction-column text-align">
              <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
              <input type="text" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange} />
            </label>
            <select name="job" onChange={this.handleChange} value={this.state.job}>
              <option value='occupation'>Select Occupation</option>
              {this.state.jobs.map(job =>
                  <option value={job.id}>{job.name}</option>
                  )}
            </select>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
      </div>
    );
  }
}

export default CreateColonist;


