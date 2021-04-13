import React from "react";
import styled from "styled-components";
import LinkedIn from "./LinkedIn";
import Resume from "./Resume";

const Background = styled.div`
  padding: 10% 20%;
`;

let GettingConnected = ({ id }) => {
  return (
    <Background id={id}>
      <div id="getConnected" style={{ textAlign: "center" }}>
        <LinkedIn />
        <Resume />
      </div>
    </Background>
  );
};

export default GettingConnected;
