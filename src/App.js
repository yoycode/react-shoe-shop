/*eslint-disable*/
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Carousel } from 'react-bootstrap'
import './App.css';
import Data from './data.js';
import Component from './Component';
import Detail from './Detail';
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom'

function App() {
  let [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Shoe Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home </Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail  </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Carousel>
            <Carousel.Item className="background">
              <img
                className="d-block background_1"
                src="./background_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block background_2"
                src="./background_2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block background_3"
                src="./background_3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="container">
            <div className="row">
              {
                shoes.map((v, i) => {
                  return <Component shoes={v} i={i} key={i} />
                })
              }
            </div>
            <button className="btn btn-primary" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((res) => {
                  console.log("성공했어요", res.data);
                  setShoes([...shoes, ...res.data])
                })
                .catch((err) => {
                  console.log("실패했어요", err)
                })
            }}>더보기</button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
