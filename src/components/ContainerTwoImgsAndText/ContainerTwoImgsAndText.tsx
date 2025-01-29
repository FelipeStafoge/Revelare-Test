import { TitleSubTitleComponent } from "../TitleSubTitleComponent/TitleSubTitleComponent";
import { BiggerImage, Container, LowerImage, TextAndImage } from "./styles";

type ContainerTwoImgsAndTextProps = {
  textContainerProps: TitleSubTitleComponent;
  lowerImg: string;
  biggerImg: string;
  reverseRow?: boolean;
};

export const ContainerTwoImgsAndText = ({
  textContainerProps,
  lowerImg,
  biggerImg,
  reverseRow,
}: ContainerTwoImgsAndTextProps) => {
  return (
    <Container $reverseRow={reverseRow}>
      <TextAndImage>
        <TitleSubTitleComponent
          title={textContainerProps?.title}
          subTitle={textContainerProps.subTitle}
          hasTopLine={textContainerProps?.hasTopLine}
          hasSeeMoreButton={textContainerProps?.hasSeeMoreButton}
        />
        <LowerImage src={lowerImg} alt="Lower-Image" />
      </TextAndImage>
      <BiggerImage src={biggerImg} alt="Bigger-Image" />
    </Container>
  );
};
