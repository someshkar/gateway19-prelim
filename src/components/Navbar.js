import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import bigLogo from "../images/biglogo.png";

const items = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Featured",
    link: "/#featured",
    scroll: true
  },
  {
    name: "Charts",
    link: "/charts"
  },
  {
    name: "Videos",
    link: "#"
  },
  {
    name: "Shop",
    link: "#"
  },
  {
    name: "Follow",
    link: "#"
  }
];

const Container = styled.div`
  height: 8vh;
  max-width: 100vw;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  height: 3rem;
  color: #2977f5;
  font-weight: 600;
  user-select: none;
`;

const Right = styled.div`
  margin-right: 50px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  margin-left: 150px;
`;

const NavItem = styled.div`
  color: #404245;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin: 14px;
  &:hover {
    color: #2977f5;
    transition: all 0.3s ease-in-out;
  }
`;

const SearchBar = styled.input`
  border: 1px solid #919192;
  width: 200px;
  height: 15px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  outline: none !important;
`;

export default function Navbar() {
  return (
    <Container>
      <Left>
        <img
          style={{ display: "inline-flex", height: "100%" }}
          src={bigLogo}
          alt="G"
        />
        <div style={{ fontSize: "140%", marginLeft: "3px" }}>enius</div>
      </Left>
      <Nav>
        {items.map(item =>
          item.scroll ? (
            <a href={item.link}>
              <NavItem>{item.name}</NavItem>
            </a>
          ) : (
            <Link to={item.link}>
              <NavItem>{item.name}</NavItem>
            </Link>
          )
        )}
      </Nav>
      <Right>
        <SearchBar placeholder="Search" />
      </Right>
    </Container>
  );
}
