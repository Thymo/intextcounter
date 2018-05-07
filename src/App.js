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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Main>

        </Main>
        <SideBar>
          <div> infotext</div>
        </SideBar>
      </Wrapper>
    );
  }
}

export default App;
