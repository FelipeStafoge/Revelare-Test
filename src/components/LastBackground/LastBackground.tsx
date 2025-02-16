import { Container, ImageContainer } from "./styles";

type LastBackgroundProps = {
  src: string;
};

export const LastBackground = ({ src }: LastBackgroundProps) => {
  return (
    <Container>
      <ImageContainer title="last-background" src={src} />
    </Container>
  );
};
