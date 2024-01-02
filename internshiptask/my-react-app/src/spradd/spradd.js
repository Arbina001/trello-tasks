import {
  SpreaddButton,
  CenterDiv,
  Description,
  EmtyDiv,
  LeftDiv,
  LeftSideImage,
  MainDiv,
  Bothsection,
  ParaDiv,
  RightDiv,
  RightDivAfter,
  RightDivBefore,
  RightImage,
  SmallCard,
  SmallImage,
  Title,
} from './spradd.styled.js';

export function Hadesection() {
  return (
    <div>
      {/* asign center div for leftside image o/p */}
      <CenterDiv>
        <LeftSideImage
          src="https://spreadd.io/assets/home/left-dot-patch.svg"
          alt="leftimage"
        />
      </CenterDiv>
      {/* finish  */}
      <MainDiv>
        {/* perform properties  */}
        <Bothsection>
          <LeftDiv>
            <SpreaddButton>Spreadd Academy</SpreaddButton>
            <Title>Create course and</Title>

            <Title>curriculums for your</Title>
            <Title>collaborators/followers</Title>
            <ParaDiv>
              <Description>
                We have got a host of features that can enable you to skyrocket
                your
              </Description>
              <Description>
                workshop and course sales. Empower your collaborators by
                delivering
              </Description>
              <Description>
                deeply engaging experience wherever they are, anytime, anywhere.
              </Description>
            </ParaDiv>
          </LeftDiv>
          <EmtyDiv></EmtyDiv>
          <RightDiv>
            <SmallCard>
              <SmallImage src="https://spreadd.io/assets/home/academy.jpg"></SmallImage>
              <span>Amazing course, i would definetely recommend</span>
            </SmallCard>
            <RightImage
              src="https://spreadd.io/assets/home/academy.jpg"
              alt="rigtimage"
            ></RightImage>
            <RightDivBefore src="https://spreadd.io/assets/home/round-patch.svg"></RightDivBefore>
            <RightDivAfter src="https://spreadd.io/assets/home/dot-patch.svg"></RightDivAfter>
          </RightDiv>
        </Bothsection>
      </MainDiv>
    </div>
  );
}
