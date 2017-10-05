import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import CreateColonist from './components/colonist';
import ViewEncounters from './components/encounters';
import ReportEncounter from './components/encounter';
import NotFound from './components/NotFound';
import Home from './components/home';


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
    <BrowserRouter>
     <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/colonist" component={CreateColonist}/>
        <Route path="/encounter" component={ReportEncounter}/>
        <Route path="/encounters" component={ViewEncounters}/>
        <Route component={NotFound} />
      </Switch>
      </div>
    </BrowserRouter>
      )
  }
}

export default App;