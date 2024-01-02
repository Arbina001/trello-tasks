import {
  Creatorf,
  Desc,
  DescPara,
  HeadingDiv,
  LargeDiv,
  LeftSideImage,
  LeftsideDiv,
  Number,
  CustomerhappyDiv,
  RightSideDiveupper,
  RightsideDiv,
  SmallSizeimage,
  Subdiv,
  TextDiv,
  Title,
  WhiteCardDiv,
} from './spradanother.styled';
export function Mainhade() {
  return (
    <>
      <LargeDiv>
        <RightSideDiveupper>
          <SmallSizeimage src="https://spreadd.io/assets/home/left-dot-patch.svg"></SmallSizeimage>
        </RightSideDiveupper>
        <HeadingDiv>
          <Subdiv>
            <LeftsideDiv>
              <WhiteCardDiv>
                <Number>100+</Number>
                <Desc>Happy Customers :heart_eyes:</Desc>
              </WhiteCardDiv>
              <LeftSideImage src="https://spreadd.io/assets/home/iphone.png"></LeftSideImage>
            </LeftsideDiv>
            <RightsideDiv>
              <Creatorf>Creator Store </Creatorf>
              <TextDiv>
                <Title>Curate your</Title>
              </TextDiv>
              <TextDiv>
                <Title>products and turn</Title>
              </TextDiv>
              <TextDiv>
                <Title>your content shop-</Title>
              </TextDiv>
              <TextDiv>
                <Title>able</Title>
              </TextDiv>
              <DescPara>
                <p>Apply to create your own store. You can choose brands</p>
                <p>and display their product within your own store. You can</p>
                <p>get paid on every sale brand makes through you.</p>
              </DescPara>
            </RightsideDiv>
          </Subdiv>
        </HeadingDiv>
      </LargeDiv>
      <CustomerhappyDiv>100+ curated products</CustomerhappyDiv>
    </>
  );
}
