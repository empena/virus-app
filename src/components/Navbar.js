import React, { Component } from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

export default class NavBar extends Component {
  state = {
    activeItem: 'home'
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const activeItem = this.state;
    return (
      <Menu inverted>
        <Link to="/">
        <Menu.Item
          as = 'div'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
      </Menu.Item>
      </Link>
      <Link to="/About">
        <Menu.Item
          as = 'div'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
      </Menu.Item>
      </Link>
      <Link to="/Viruses">
        <Menu.Item
          as = 'div'
          name='viruses'
          active={activeItem === 'viruses'}
          onClick={this.handleItemClick}
        >
          Virus
      </Menu.Item>
      </Link>
    </Menu >
    )
  };
};