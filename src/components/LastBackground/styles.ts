import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #e6e8ea;
`;

export const ImageContainer = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 60px;
  @media (max-width: 768px) {
    height: 250px;
  }
`;
