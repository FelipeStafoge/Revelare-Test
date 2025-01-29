import { CupContainer, CupDiv, CupImg } from "./styles";

type RenderCupsProps = {
  allCups?: string[];
};

export const RenderCups = ({ allCups }: RenderCupsProps) => {
  return (
    <CupContainer>
      {allCups?.map((cup, index) => (
        <CupDiv key={index}>
          <CupImg src={cup} alt={`Cup ${index + 1}`} />
        </CupDiv>
      ))}
    </CupContainer>
  );
};
