import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";



class Home extends Component {
  
    componentDidMount(){ 
    }
  
  
    render() {
    return (
      <div className="Home">
        <h1>IronBeers</h1>
        <div>
          <img src="/images/beers.png" alt=" " />
          <Link to="/beers">All Beers</Link>
          <p>
            Lorem ipsum
          </p>
        </div>
        <div>
          <img src="/images/random-beer.png" alt=" " />
          <Link to="/random">Random Beer</Link>
          <p>
            Lorem ipsum
          </p>
        {/* </div>
        https://ih-beers-api2.herokuapp.com/beers/random
        <div> */}
          <img src="/images/new-beer.png" alt=" " />
          <Link to="/new">New Beer</Link>
          <p>
            Lorem ipsum 
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
