import React from 'react';
import './css/App.css';
import Navbar from './components/navbar'
import About from './components/about'
import Timeline from './components/timeline'
import Contact from './components/contact'
import Feature from './components/feature'

function App() {
  return (<React.Fragment>
  <Navbar/>
  <main className="container">
    <About/>
    <hr className="separator"/>
    
    <Timeline/>
    <hr className="separator"/>
    <Feature/>
    <hr className="separator"/>
    <Contact/>
    </main>
    </React.Fragment>
  );
}

export default App;
