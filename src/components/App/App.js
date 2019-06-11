import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container'
import Movies from './Movies/Movies';
import TopBar from "./TopBar/TopBar";
import './App.css';
require('dotenv').config()

function App() {
  return (
      <Fragment>
          <TopBar/>
          <Container>
              <Movies/>
          </Container>
      </Fragment>
  );
}

export default App;