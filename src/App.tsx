import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Nav from './components/nav';
import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import NotFound from './pages/notFound';
import Projects from './pages/projects';
import Resume from './pages/resume';



function App() {
  return (
    <>
    <Router >
    <CssBaseline />
    
    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>

        <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route  component={NotFound} />
    </Switch>
    
    <footer></footer>

    </Router>

    
    </>
  );
}

export default App;
