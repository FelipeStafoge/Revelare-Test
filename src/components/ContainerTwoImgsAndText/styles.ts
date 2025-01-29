import { styled } from "styled-components";

export const Container = styled.div<{ $reverseRow?: boolean }>`
  display: flex;
  height: 80dvh;
  max-height: 80dvh;
  width: 100%;
  flex-direction: ${({ $reverseRow }) => ($reverseRow ? "row-reverse" : "row")};

  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    max-height: none;
  }
`;

export const LowerImage = styled.img`
  width: 100%;
  max-height: 50%;
  object-fit: cover;
  aspect-ratio: 16 / 9;

  @media (max-width: 768px) {
    max-height: none;
    aspect-ratio: auto;
  }
`;

export const TextAndImage = styled.div`
  height: 100%;
  display: flex;
  max-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BiggerImage = styled.img`
  width: 50%;
  max-height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;

  @media (max-width: 768px) {
    width: 100%;
    max-height: none;
    aspect-ratio: auto;
  }
`;
