import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import TextAreaHighlight from './ReactTextareaHighlight';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  color: #333;
  font-size: 15px;
`;

const Main = styled.div`
  flex: 4;
`;

const SideBar = styled.div`
  flex: 1;
  max-width: 400px;
  min-width: 250px;
  background-color: #f8f8f8;
  border-left: 1px solid #eee;
  padding: 160px 30px 0px 40px;

  @media (max-width: 600px) {
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
  border: 1px solid #dc143c;
  float: right;
`;

const TextArea = styled(TextAreaHighlight)`
  width: 960px;
`;

const isCitation = () => /\([^)]*?, \d{4}\)/gm;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Main>
          <TextAreaHighlight
            value="The resolution of multi material printing is based on the printing technology a printer uses. Filament Deposition Modeling for instance has a resolution limit of around 20 micrometers whilst stereolithography has a resolution limit of only a couple micrometers (Jin et al., 2009; Sun et al, 2005). The largest resolution has fundamentally no limit but in practice itis a few centimeters. Materials pose a limit, too, as their flexibility and melting temperature completely determine the printability of an object. (Campbell et al., 2011). Multi-material printing can be used in different ways (i.e. clinical, electronic and industrial), though it will not be practical to all applications (University of Nottingham, 2017). For example,  even though food can be printed, it remains cheaper to cook it  (Chu, 2017).
            3D-Functional Material Printing"
            className="censor"
            highlight={isCitation}
          />
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
