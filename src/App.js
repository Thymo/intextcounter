import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  color: #333;
  font-size: 15px;
`;

const Main = styled.div`
  Flex: 4;
`;

const SideBar = styled.div`
  Flex: 1;
  max-width: 400px;
  min-width: 250px;
  background-color: #F8F8F8;
  border-left: 1px solid #EEE;
  padding: 160px 30px 0px 40px;

  @media(max-width: 600px){
    width: 100%;
    max-width: 100%;
  }
`;

const Row = styled.div`
  padding: 5px;
  margin-bottom: 20px;
`;

const Label = styled.span`
  float: left;
  margin-right: 20px;

`;

const Value = styled.span`
  background: white;
  padding: 3px 10px;
  border: 1px solid #DC143C;
  float: right;
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
            <Value>x</Value>
          </Row>
          <Row>
            <Label>Words excluding citations</Label>
            <Value>y</Value>
          </Row>
          <Row>
            <Label>Inline citations</Label>
            <Value>z</Value>
          </Row>
          <Row>
            <Label>Citations words</Label>
            <Value>a</Value>
          </Row>
        </SideBar>
      </Wrapper>
    );
  }
}

export default App;
