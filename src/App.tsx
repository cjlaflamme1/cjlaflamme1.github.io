import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Container } from '@material-ui/core';

import './App.css';
import Home from './pages/home';

import NotFound from './pages/notFound';
import Projects from './pages/projects';
import Resume from './pages/resume';



function App() {
  return (
    <>
    <div className="body">
      <Router >
        <CssBaseline />

        <div className="Nav">
          <span className="name">
            Chad J Laflamme
          </span>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/projects">Projects</Link>
          </span>
          <span>
            <Link to="/resume">Resume</Link>
          </span>
        </div>
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            
            {/* <Route component={NotFound} /> */}

          </Container>
        </Switch>
      </Router>
    </div>
    <div className="Nav">
      <span>©2020</span>
    </div>


      </>
  );
}

export default App;
