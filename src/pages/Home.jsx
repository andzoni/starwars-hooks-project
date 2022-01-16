import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../starwars.svg';

function Home() {
  return (
    <main>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <img
            src={ logo }
            width="100"
            className="d-inline-block align-top"
            alt="starwars logo"
          />
          <Navbar.Brand href="/">StarWars Hooks Project</Navbar.Brand>
          <img
            src={ logo }
            width="100"
            className="d-inline-block align-top"
            alt="starwars logo"
          />
        </Container>
      </Navbar>
        <Header/>
        <Table/>
    </main>
  );
}

export default Home;
