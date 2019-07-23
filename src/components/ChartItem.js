import React from "react";
import styled from "styled-components";

const fontSize = "30px";
const fontColor = "#193158";

const Container = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
    transition: all 0.3s ease;
  }
`;

const Number = styled.div`
  font-family: "Gotham Bold", sans-serif;
  font-size: ${fontSize};
  color: ${fontColor};
  margin-left: 30px;
`;

const Song = styled.div`
  font-family: "Gotham Bold", sans-serif;
  font-size: ${fontSize};
  color: ${fontColor};
`;

const Singer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: ${fontSize};
  color: ${fontColor};
`;

const Flames = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: ${fontSize};
  color: #d1301e;
`;

const Listens = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: ${fontSize};
  color: ${fontColor};
  margin-right: 30px;
`;

export default function ChartItem({ name, singer, fire, listens, number }) {
  return (
    <Container>
      <Number>{number}</Number>
      <Song>{name}</Song>
      <Singer>{singer}</Singer>
      <Flames>
        <i className="fas fa-fire" />
        &nbsp;&nbsp;{fire}
      </Flames>
      <Listens>
        <i className="fas fa-headphones" />
        &nbsp;&nbsp;{listens}
      </Listens>
    </Container>
  );
}
