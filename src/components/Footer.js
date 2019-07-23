import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Gotham Bold", sans-serif;
  font-size: 20px;
`;

export default function Footer() {
  return (
    <Container>
      <Text>
        Made with <i className="fas fa-heart" style={{ color: "#c92a1e" }} /> by
        the Exun Clan
      </Text>
    </Container>
  );
}
