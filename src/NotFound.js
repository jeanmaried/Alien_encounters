import {BrowserRouter, Route, Link} from 'react-router-dom';
import React from 'react';

const NotFound = () =>
  <div className="box">
    <div id="home" className="flex direction-row justify-center">
      <Link to="/home" ><div>Home</div></Link>
    </div>
    <div id='saucer'><img src={require('./ufo.png')} /></div>
    <div className='flex direction-column align-items-center'>
	    <h1>404 page not found</h1>
	    <p>We are sorry but the page you are looking for does not exist.</p>
	</div>
  </div>

export default NotFound;