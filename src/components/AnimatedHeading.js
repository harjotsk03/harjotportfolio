import React from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: "Spartan", sans-serif;
  color: #2d2d2d;
  ::selection {
    background: rgba(0, 0, 170, 0.3);
  }
`;

const Heading = styled.div`
  margin: 80px 0 0 80px;
  width: max-content;
  display: flex;
  flex-direction: column;
`;

const SlideUpDiv = styled.div`
  overflow: hidden;

  p {
    width: max-content;
    white-space: nowrap;
    margin: 0;
    line-height: 140%;
    animation: ${slideUp} 1.25s cubic-bezier(0.65, 0, 0.35, 1) both;
    animation-delay: ${({ delay }) => delay || "0s"};
  }
`;

const GreenText = styled.span`
  color: #32c267;
`;

const AnimatedHeading = () => {
  return (
    <Container className="-mt-40 -ml-20 lg:-ml-14">
      <Heading>
        <SlideUpDiv>
          <p className="poppins-semibold text-2xl lg:text-7xl" delay="0s">
            designing for the future,
          </p>
        </SlideUpDiv>
        <SlideUpDiv>
          <p className="poppins-semibold text-2xl lg:text-7xl" delay="2s">
            coding for the present<span className="text-purple-500">.</span>
          </p>
        </SlideUpDiv>
      </Heading>
    </Container>
  );
};

export default AnimatedHeading;
