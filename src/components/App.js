import React, { Component } from 'react';
import Interactive from 'react-interactive';

import { Switch, BrowserRouter as Router, Route, Link  } from 'react-router-dom';
//import s from '../styles/app.style';

import {Navbar, Nav, NavItem, Jumbotron, Button} from 'react-bootstrap';

import AboutComponent from './AboutComponent';
import ResumeComponent from './ResumeComponent';
import ContactComponent from './ContactComponent';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
      <Switch>
        <Router>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" id="NavItem">
                  JENNIFER HAGGERTY
                </Link>
              </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse id="navButton">
            <Nav>
              <Link to="/about" id="NavItem">About</Link>
              <Link to="/resume" id="NavItem">Resume</Link>
              <Link to="/contact" id="NavItem">Contact</Link>
            </Nav>
            <Nav pullRight>
              <Link to="/github" id="NavItem">Github</Link>
            </Nav>
          </Navbar.Collapse>
            <Route exact path="/" component={AboutComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/resume" component={ResumeComponent}/>
            <Route path="/contact" component={ContactComponent}/>
            <Route path="/github" component={() => window.location = 'https://github.com/jennhaggerty'}/>
          </Navbar>
        </Router>
      </Switch>
  );
}
