import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Code } from '../styles/style';
import s from '../styles/home.style';

import { Switch, BrowserRouter as Router, Route, Link  } from 'react-router-dom';
//import s from '../styles/app.style';

import {Navbar, Nav, NavItem, Jumbotron, Button} from 'react-bootstrap';

import Header from './Header';


export default function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}
