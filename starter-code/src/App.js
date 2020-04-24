import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import Details from "./Details"
import "../node_modules/bootstrap/dist/css/bootstrap.css";



class App extends Component {
  componentDidMount(){ 
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/beers/:id" component={Details} />
          <Route exact path="/random" component={RandomBeer} />
          <Route exact path="/new" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
