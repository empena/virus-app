import React from 'react';
import './App.css';
import { Route, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import Viruses from './components/Viruses';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Viruses' component={Viruses} />
    </Container>
  </>
)

export default App;
