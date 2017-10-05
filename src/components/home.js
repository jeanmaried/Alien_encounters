import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../flex.css';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
    	<div className="box">
        <div id="home" className="flex direction-row justify-center">
          <div></div>
          <Link to="/" ><div>Home</div></Link>
        </div>
        <div id='saucer'><img src={require('../ufo.png')} /></div>
    		<div id="report" className="flex justify-center"><Link to="/colonist"><div id="report_box">REPORT UFO</div></Link></div>
    	</div>
    )
  }

  componentDidMount(){
    const elem = document.getElementById("saucer");
    if (elem == null){
      console.log(elem);
    }
    else{
      this.UFO();
    }
  }

  UFO(){
    let elem = document.getElementById("saucer"),
        speed = 1,
        currentPos = 0;
    elem.style.left = 0+"px";
    elem.style.right = "auto";
    let motionInterval = setInterval(function() {
        currentPos += speed;
        if (currentPos >= 800 && speed > 0) {
           currentPos = 800;
           speed = -1 * speed;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
        if (currentPos <= 0 && speed < 0) {
           clearInterval(motionInterval);
        }
        elem.style.left = currentPos+"px";
    },20);
}
}

export default Home;
