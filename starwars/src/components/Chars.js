import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
opacity: 1
color: white;
font-weight: bold;
`;

const StyledSection = styled.section`
  display: inline-block;
  padding: 3rem;
  background: gray;
  width: 100px;
  height: auto;
  margin-bottom: 20px;
  border: 2px dashed white;
`;

const StyledHead = styled.h2`
  font-size: 1.35rem;
  max-width: 100%;
  text-decoration: underline;
  :hover {
    color: white;
  }
`;

const Chars = props => {
  if (!props.char) return <h3>Loading...</h3>;

  return (
    <div>
      <StyledSection>
        <StyledHead>{props.char.name}</StyledHead>
        <StyledP>Height: {props.char.height}</StyledP>
        <StyledP>{props.char.hair_color}</StyledP>
        <StyledP>{props.char.gender}</StyledP>
      </StyledSection>
    </div>
  );
};

export default Chars;
