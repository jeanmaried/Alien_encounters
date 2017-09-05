import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import CreateColonist from './colonist';
import ViewEncounters from './encounters';
import ReportEncounter from './encounter';
import NotFound from './NotFound';
import Home from './home';


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
        <Route path="/report" component={ReportEncounter}/>
        <Route path="/view" component={ViewEncounters}/>
        <Route component={NotFound} />
      </Switch>
      </div>
    </BrowserRouter>
      )
  }
}

export default App;