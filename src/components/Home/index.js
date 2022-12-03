import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <section className="container">
      <HomeContainer>
        <h1 className="a-header">Fake Artist!</h1>
      </HomeContainer>
    </section>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
