import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import ChartItem from "../components/ChartItem";

const chart = [
  {
    name: "This is a song",
    singer: "singer",
    fire: "157",
    listens: "137.9k"
  },
  {
    name: "This is a song",
    singer: "singer",
    fire: "157",
    listens: "137.9k"
  },
  {
    name: "This is a song",
    singer: "singer",
    fire: "157",
    listens: "137.9k"
  }
];

const Container = styled.div`
  max-width: 100vw;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Heading = styled.div`
  font-family: "Gotham Bold", sans-serif;
  font-size: 119px;
  color: #193158;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Subheading = styled.div`
  font-family: "Gotham Bold", sans-serif;
  font-style: italic;
  color: #d43182;
  font-size: 28px;
  text-transform: uppercase;
`;

const ChartContainer = styled.div`
  width: 60vw;
  margin-top: 20px;
`;

export default class Charts extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Heading>Charts</Heading>
          <Subheading>Trending on Genius</Subheading>
          <ChartContainer>
            {chart.map((song, i) => (
              <ChartItem {...song} number={i + 1} />
            ))}
          </ChartContainer>
        </Container>
      </Layout>
    );
  }
}
