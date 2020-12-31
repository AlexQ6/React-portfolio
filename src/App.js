import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const App = (params) => {
  // eslint-disable-next-line
  const [title, setTitle] = useState("Alex Qiang");
  // eslint-disable-next-line
  const [headerLinks, setHeaderLinks] = useState([
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ]);
  // eslint-disable-next-line
  const [home, setHome] = useState({
    title: "Alex Qiang",
    subTitle: "A full stack developer ",
    text: "Check out my projects below",
  });
  // eslint-disable-next-line
  const [about, setAbout] = useState({
    title: "About Me",
  });

  return (
    <BrowserRouter>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Alex Qiang</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              title={home.title}
              subTitle={home.subTitle}
              text={home.text}
            />
          )}
        />
        <Route path="/about" render={() => <AboutPage title={about.title} />} />

        <Footer />
      </Container>
    </BrowserRouter>
  );
};


export default App;
