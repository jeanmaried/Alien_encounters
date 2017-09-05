import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './flex.css';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
    	<div className="box">
        <div id="home" className="flex direction-row justify-between">
          <div></div>
          <Link to="/home" ><div>Home</div></Link>
          <Link to="/colonist" ><div>Next &rarr;</div></Link>
        </div>
        <div id='saucer'><img src={require('./ufo.png')} /></div>
    		<div id="report" className="flex justify-center"><Link to="/colonist"><div id="report_box">REPORT UFO</div></Link></div>
    	</div>
    )
  }
}

export default Home;
