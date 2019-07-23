import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";

import PostItem from "../components/PostItem";

const posts = [
  {
    image:
      "https://images.genius.com/e39e1c1f2b7322875a264a5920622525.900x500x1.jpg",
    title:
      "Kid Cudi's Upcoming Album 'Entergalactic' To Be Accompanied By An Animated Netflix Series",
    by: "Eddie Fu"
  },
  {
    image:
      "https://images.genius.com/1e6d29f77d4ab7a0eb756224a32a57cd.900x500x1.jpg",
    title: "Virgil Abloh Debuts Unreleased A$AP Rocky Track 'Frankenstein'",
    by: "John Doe"
  },
  {
    image:
      "https://images.genius.com/18e00f39b72800ef5494bf9c998d3ff6.900x500x1.jpg",
    title:
      "Dave Chappelle Says He Heard 'An Exclusive Leak' From The Madlib-Produced Black Star Reunion Album",
    by: "Eddie Fu"
  },
  {
    image:
      "https://images.genius.com/da99dbd316cf98537100b67004ff3a8a.1200x1200x1.jpg",
    title:
      "Lil Nas X's 'Old Town Road' Ties Record For Longest-Running No. 1 Hit On The Billboard Hot 100",
    by: "Eddie Fu"
  }
];

const Landing = styled.div`
  max-width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const BigImage = styled.img`
  max-height: 40vh;
  border-radius: 40px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
  user-select: none;
`;

const Title = styled.div`
  font-family: "Gotham Bold", sans-serif;
  color: #193158;
  font-size: 40px;
`;

const Subtitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #193158;
  font-size: 20px;
  margin-top: 10px;
`;

const Byline = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #193158;
  font-size: 18px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  max-width: 60%;
`;

const PostsContainer = styled.div`
  margin-top: 15vh;
  margin-bottom: 15vh;
  margin-left: 10vw;
  margin-right: 10vw;
  max-width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Landing>
          <div style={{ maxWidth: "28vw" }}>
            <Title>
              Ari Lennox Shares A Diss Track Targeting Jermaine Dupri’s Comments
              About Female Rappers
            </Title>
            <Subtitle>
              “It seems like you hatin’ / It seems like you don’t like how that
              queen takeover tastin’.”
            </Subtitle>
            <Byline>
              <div>by John</div>
              <div>
                <i className="far fa-calendar-alt" />
                &nbsp;&nbsp;Jul / 13 / 2019&nbsp;&nbsp;&nbsp;
              </div>
              <div>
                <i className="fas fa-eye" />
                &nbsp;&nbsp;301
              </div>
            </Byline>
          </div>
          <BigImage src="https://t2.genius.com/unsafe/0x641/https%3A%2F%2Fimages.genius.com%2F59e9f255c015c1026c564f1681f19c57.900x500x1.jpg" />
        </Landing>
        <section id="featured">
          <PostsContainer>
            {posts.map(post => (
              <PostItem {...post} />
            ))}
          </PostsContainer>
        </section>
      </Layout>
    );
  }
}
