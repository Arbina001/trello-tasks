import styled from 'styled-components';
export const MainDiv = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fff6f6;
  align-items: center;
`;
export const LRcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Leftsection = styled.div`
  max-width: max-content;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const MargingDiv = styled.div`
  background-color: #fff6f6;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 13px 0px 0px 0px;
  align-items: flex-start;
`;
export const RightImage = styled.img`
  max-width: 310px;
  z-index: 1;
  border-radius: 16px;
  @media (max-width: 700px) {
    margin: 60px 0px 0px 0px;
    max-width: 200px;
  }
`;
export const PinkAvatarCD = styled.div`
  position: absolute;
  top: -21px;
  right: 20px;
  background: rgb(255, 77, 80);
  border-radius: 3px;
  padding: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 239px;
  width: 100%;
  z-index: 2;
  color: white;
  font-size: 11px;
  font-weight: 600;
  @media (max-width: 700px) {
    top: 23px;
    right: -67px;
    font-size: 9px;
  }
`;

export const LeftsideimgDiv = styled.div`
  max-width: 50%;
  width: 100%;
  position: relative;
  padding: 27px 0px 7px;
`;
export const SmallImage = styled.img`
  max-width: 30px;
  width: 100%;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const Rightsection = styled.div`
  height: auto;
  max-width: 48%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const ImageBefore = styled.img`
  position: absolute;
  top: -19px;
  left: 7%;
  width: 95px;
  height: 97px;
  z-index: 0;
  border: 0px solid red;
  border-radius: 50%;
  @media (max-width: 700px) {
    top: 27px;
    left: -31%;
  }
`;
export const ImageAfter = styled.img`
  content: '';
  position: absolute;
  bottom: -20px;
  left: 35px;
  background: url(assets/home/dot-patch.svg) no-repeat;
  width: 90px;
  height: 57px;
  z-index: 1;
  @media (max-width: 700px) {
    left: -42px;
  }
`;
export const Cardtxt = styled.span`
  @media (max-width: 700px) {
    font-size: 10px;
    font-weight: 700;
  }
`;
export const Txtsection = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  font-size: 11px;
  vertical-align: baseline;
`;
export const Description = styled.p`
  color: black;
  font-style: sans-serif;
  font-size: 14px;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
export const BlankDiv = styled.div`
  width: 250px;
  padding: 0px 65px 0px 19px;
`;
export const WhiteGradientBT = styled.div`
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
export const Title = styled.span`
  font-style: sans-serif;
  color: #212b36;
  font-size: 47px;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const LeftlogoImage = styled.img``;