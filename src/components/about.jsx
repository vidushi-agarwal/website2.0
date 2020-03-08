import React, { Component } from 'react';
import AboutText from '../components/about_text.jsx'
import Background from '../images/about.jpg';
import '../css/about.css'
class About extends Component {
    state = {  }
    render() { 
        return (<div className="about"  className="row" >
            <div className="aboutImage" className="col-md-6" style={{backgroundImage: "url(" +Background + ")", backgroundSize:"60%", backgroundRepeat:"no-repeat", backgroundPosition:"50% 50%"}}>  
            
            </div>
            <div className="col-md-6">
                <AboutText />
            </div>
            </div>
          );
    }
}
 
export default About;