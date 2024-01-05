import {
  WhiteGradientBT,
  MargingDiv,
  Description,
  BlankDiv,
  Leftsection,
  LeftlogoImage,
  MainDiv,
  LRcontainer,
  Txtsection,
  Rightsection,
  ImageAfter,
  ImageBefore,
  RightImage,
  PinkAvatarCD,
  SmallImage,
  Title,
} from './spradd.styled.js';

export function Hadesection() {
  return (
    <div>
      {/* asign center div for leftside image o/p */}
      <MargingDiv>
        <LeftlogoImage
          src="https://spreadd.io/assets/home/left-dot-patch.svg"
          alt="leftimage"
        />
      </MargingDiv>
      {/* finish  */}
      <MainDiv>
        {/* perform properties  */}
        <LRcontainer>
          <Leftsection>
            <WhiteGradientBT>Spreadd Academy</WhiteGradientBT>
            <Title>Create course and</Title>

            <Title>curriculums for your</Title>
            <Title>collaborators/followers</Title>
            <Txtsection>
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
            </Txtsection>
          </Leftsection>
          <BlankDiv></BlankDiv>
          <Rightsection>
            <PinkAvatarCD>
              <SmallImage src="https://spreadd.io/assets/home/academy.jpg"></SmallImage>
              <span>Amazing course,i would definetely recommend</span>
            </PinkAvatarCD>
            <RightImage
              src="https://spreadd.io/assets/home/academy.jpg"
              alt="rigtimage"
            ></RightImage>
            <ImageBefore src="https://spreadd.io/assets/home/round-patch.svg"></ImageBefore>
            <ImageAfter src="https://spreadd.io/assets/home/dot-patch.svg"></ImageAfter>
          </Rightsection>
        </LRcontainer>
      </MainDiv>
    </div>
  );
}