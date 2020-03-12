import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
    </Container>
  </>
)

export default App;
