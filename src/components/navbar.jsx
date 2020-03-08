import React, { Component } from 'react';
import '../css/navbar.css'

class Navbar extends Component {
    render() { 
        return (  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
  <a className="navbar-brand" href="#">Vidushi
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
    <div className="navbar-nav ml-auto" >
      <a className="nav-item nav-link active" href="#">About <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Skills</a>
      <a className="nav-item nav-link" href="./timeline.jsx">Timeline</a>
      <a className="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
  </div>
</nav>
        );
    }
}
 
export default Navbar;