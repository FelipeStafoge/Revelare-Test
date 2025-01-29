import { styled } from "styled-components";
import { TitleSubTitleComponent } from "../TitleSubTitleComponent/TitleSubTitleComponent";
import { RenderCups } from "../RenderCups/RenderCups";

type ContainerTextAndImgProps = {
  background?: string;
  backgroundColor?: string;
  textContainerProps: TitleSubTitleComponent;
  hasToRenderCups?: boolean;
  allCups?: string[];
};

export const ContainerTextAndImg = ({
  background,
  backgroundColor,
  textContainerProps,
  hasToRenderCups,
  allCups,
}: ContainerTextAndImgProps) => {
  return (
    <Container $background={background} $backgroundColor={backgroundColor}>
      <TitleAndCups>
        <TitleSubTitleComponent
          title={{ text: textContainerProps.title.text }}
          subTitle={{ text: textContainerProps.subTitle.text }}
          hasTopLine={textContainerProps.hasTopLine}
          hasSeeMoreButton={textContainerProps?.hasSeeMoreButton}
          backgroundColor={backgroundColor}
        />
        {hasToRenderCups && <RenderCups allCups={allCups} />}
      </TitleAndCups>
    </Container>
  );
};

const Container = styled.div<{
  $background?: string;
  $backgroundColor?: string;
}>`
  background-image: ${({ $background }) =>
    $background ? `url(${$background})` : "none"};
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? `rgb(${$backgroundColor})` : "white"};
  justify-content: flex-start;
  align-items: center;
  padding: 0 5%;
  height: 80dvh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    background-size: cover;
    background-position: center;
  }
`;

const TitleAndCups = styled.div`
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
