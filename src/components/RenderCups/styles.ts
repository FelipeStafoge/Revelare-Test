import { styled } from "styled-components";

export const CupContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; 
`;

export const CupDiv = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #00754a; 
  background-color: white;
    @media (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;

export const CupImg = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
  border-radius: 50%; 
`;
