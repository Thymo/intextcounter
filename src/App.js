import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';
import TextAreaHighlight from './ReactTextareaHighlight';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  font-size: 15px;
`;

const Main = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

}
`;
const Container = styled.div`
  max-width: 800px;
  flex: 1;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1``;

const SideBar = styled.div`
  flex: 1;
  max-width: 400px;
  min-width: 250px;
  background-color: #f8f8f8;
  border-left: 1px solid #eee;
  padding: 150px 30px 30px 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  color: #aaa;
`;

const Row = styled.div`
  padding: 15px 0px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.span`
  color: black;
  font-weight: 500;
`;

const Value = styled.span`
  ${'' /* background: white; */} padding: 3px 10px;
  float: right;
`;

const citationPattern = /\([^)]*?, \d{4}\)/gm;
const isCitation = () => citationPattern;

const extractCitations = text => text.match(citationPattern);
const countWords = text => (text.match(/\S+/g) || []).length;

class App extends Component {
  state = {
    text: 'Paste your text here to count the words (Example et al., 2018).'
  };

  onTextChangeHandler = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;
    const citations = extractCitations(text) || [];
    const totalWordCount = countWords(text);
    const citationWordCount = citations.reduce(
      (acc, citation) => (acc += countWords(citation)),
      0
    );
    const wordCountExlcudingCitations = totalWordCount - citationWordCount;
    const citationsCount = citations.length;

    console.log('citaionts', extractCitations(text));
    return (
      <Wrapper>
        <Main>
          <Container>
            <Title>
              Intextcounter: a smart word counter for Technology Managment
            </Title>
            <TextAreaHighlight
              value={text}
              highlight={isCitation}
              onChange={this.onTextChangeHandler}
            />
          </Container>
        </Main>
        <SideBar>
          <Body>
            <Row>
              <Label>Inline citations</Label>
              <Value>{citationsCount}</Value>
            </Row>
            <Row>
              <Label>Words including citations</Label>
              <Value>{totalWordCount.toLocaleString()}</Value>
            </Row>
            <Row>
              <Label>Words excluding citations</Label>
              <Value>{wordCountExlcudingCitations.toLocaleString()}</Value>
            </Row>
            <Row>
              <Label>Words for citations</Label>
              <Value>{citationWordCount}</Value>
            </Row>
          </Body>
          <Footer>
            Handcrafted with ❤️by{' '}
            <a href="https://www.linkedin.com/in/maxrijnierse">Max</a>,{' '}
            <a href="https://www.facebook.com/nathan.houtsma.7">Nathan</a> &{' '}
            <a href="https://www.linkedin.com/in/thymoterdoest">Thymo</a>
          </Footer>
        </SideBar>
      </Wrapper>
    );
  }
}

export default App;
