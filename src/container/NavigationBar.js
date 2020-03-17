import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: gray;
    &:hover { color: #F6F6F6; }
  }
  .navbar-brand {
    font-size: 2.4em;
    font-weight:500;
    color: black;
    background-color: #F6F6F6;
    padding:2%;
margin-bottom:2%;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">DV</Navbar.Brand>
    
    </Navbar>
  </Styles>
);