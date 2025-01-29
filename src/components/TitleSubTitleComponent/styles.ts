import { styled } from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  margin: auto;
`;

export const TopLine = styled.div`
  background-color: #00754a;
  height: 8px;
  width: 60px;
  margin-bottom: 16px;
`;

export const TitleDiv = styled.div`
  margin-bottom: 12px;
`;

export const TitlePhrase = styled.h2<{ $fontSize?: number }>`
  font-size: ${({ $fontSize }) => $fontSize || 24}px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  line-height: 1.2;
`;

export const SubTitleDiv = styled.div`
  margin-bottom: 16px;
`;

export const SubTitlePhrase = styled.h3`
  font-size: 16px;
  font-style: italic;
  color: #555;
  font-family: "Arial", sans-serif;
  line-height: 1.5;
`;

export const SeeMoreButton = styled.button`
  height: 40px;
  width: 110px;
  border: 1px solid #ccc;
  background: none;
  color: #666;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }

  &:active {
    background-color: #d7d7d7;
  }
`;

export const SeeMoreModal = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
