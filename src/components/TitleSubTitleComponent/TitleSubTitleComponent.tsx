import { useState } from "react";
import styled from "styled-components";
import { Modal } from "@mui/material";
import { X } from "react-feather";

export type TitleSubTitleComponent = {
  hasTopLine?: boolean;
  title: {
    text: string;
    style?: string;
    fontSize?: number;
  };
  subTitle: {
    text: string;
    style?: string;
    fontSize?: number;
  };
  hasSeeMoreButton?: boolean;
  backgroundColor?: string;
  ingredients?: string;
  creationDate?: string;
};

export const TitleSubTitleComponent = ({
  title,
  subTitle,
  hasTopLine,
  backgroundColor,
  hasSeeMoreButton,
  creationDate,
  ingredients,
}: TitleSubTitleComponent) => {
  const [isOpen, setIsOpen] = useState(false);
  const newDate = new Date(creationDate || "");
  return (
    <BackgroundContainer $backgroundColor={backgroundColor}>
      <Container>
        {creationDate && (
          <CreationDateDiv>{newDate.toDateString()}</CreationDateDiv>
        )}
        {hasTopLine && <TopLine />}
        <TitleDiv>
          <TitlePhrase $fontSize={title.fontSize}>{title.text}</TitlePhrase>
        </TitleDiv>
        <SubTitleDiv>
          <SubTitlePhrase>{subTitle.text}</SubTitlePhrase>
        </SubTitleDiv>
        {ingredients && (
          <SubTitleDiv>
            <SubTitlePhrase>{ingredients}</SubTitlePhrase>
          </SubTitleDiv>
        )}
        {hasSeeMoreButton && (
          <SeeMoreButton
            className="ButtonStyledClass"
            title="Saber mais"
            onClick={() => setIsOpen(true)}
          >
            Saber mais
          </SeeMoreButton>
        )}

        {isOpen && (
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            sx={{
              justifyItems: "center",
              alignItems: "center",
              display: "flex",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <SeeMoreModal>
              <XIcon
                size={24}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <TitleSubTitleComponent
                hasTopLine
                title={{ text: title.text }}
                subTitle={{
                  text: subTitle.text,
                }}
              />
            </SeeMoreModal>
          </Modal>
        )}
      </Container>
    </BackgroundContainer>
  );
};

const XIcon = styled(X)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CreationDateDiv = styled.div``;

const BackgroundContainer = styled.div<{
  $backgroundColor?: string;
}>`
  width: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor ? `rgb(${$backgroundColor})` : "white"};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  margin: auto;
`;

const TopLine = styled.div`
  background-color: #00754a;
  height: 8px;
  width: 60px;
  margin-bottom: 16px;
`;

const TitleDiv = styled.div`
  margin-bottom: 12px;
`;

const TitlePhrase = styled.h2<{ $fontSize?: number }>`
  font-size: ${({ $fontSize }) => $fontSize || 24}px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  line-height: 1.2;
`;

const SubTitleDiv = styled.div`
  margin-bottom: 16px;
`;

const SubTitlePhrase = styled.h3`
  font-size: 16px;
  font-style: italic;
  color: #555;
  font-family: "Arial", sans-serif;
  line-height: 1.5;
`;

const SeeMoreButton = styled.button`
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

const SeeMoreModal = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
