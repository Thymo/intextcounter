import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const Main = styled.div`
  Flex: 3;
`;

const SideBar = styled.div`
  Flex: 1;
  max-width: 400px;
  background-color: #F8F8F8;
  border-left: 1px solid #EEE;
  padding: 160px 0px 0px 40px;
`;

const Row = styled.div`

`;

const Label = styled.div`

`;

const Value = styled.div`

`;



class App extends Component {
  render() {
    return (
      <Wrapper>
        <Main>

        </Main>
        <SideBar>
          <Row>
            <Label>Words</Label>
            <Value></Value>
          </Row>
          <Row>
            <Label>Words excluding citations</Label>
            <Value></Value>
          </Row>
          <Row>
            <Label>Inline citations</Label>
            <Value></Value>
          </Row>
          <Row>
            <Label>Citations words</Label>
            <Value></Value>
          </Row>
        </SideBar>
      </Wrapper>
    );
  }
}

export default App;
