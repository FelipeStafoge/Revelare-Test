import { styled } from "styled-components";


export const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 35px;
  display: flex;
  border-top: 10px solid #00754a;
  height: 80px;
  position: sticky;
  top: 0;
  justify-content: space-between;
  background-color: white;
`;

export const FullHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%; 
`


export const InputWithMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
`;

export const Icon = styled.img<{ $sizeWidth: string; $sizeHeight: string }>`
  width: ${({ $sizeWidth }) => `${$sizeWidth}px`};
  height: ${({ $sizeHeight }) => `${$sizeHeight}px`};
`;

export const Input = styled.input`
  height: 30px;
  width: 150px;
  padding: 5px 20px 5px 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  box-sizing: border-box;

  background: url("src/assets/loupe.png") no-repeat right 10px center;
  background-size: 10px;
`;
