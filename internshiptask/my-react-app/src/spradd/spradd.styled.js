import styled from 'styled-components';
export const MainDiv = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fff6f6;
  align-items: center;
`;
export const Bothsection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftDiv = styled.div`
  max-width: max-content;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const CenterDiv = styled.div`
  background-color: #fff6f6;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const RightImage = styled.img`
  max-width: 280px;
  z-index: 1;
  border-radius: 16px;
`;
export const SmallCard = styled.div`
  position: absolute;
  top: -26px;
  right: -9px;
  background: rgb(254, 79, 82);
  border-radius: 3px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 260px;
  width: 100%;
  z-index: 2;
  color: white;
`;
export const SmallImage = styled.img`
  max-width: 30px;
  width: 100%;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const RightDiv = styled.div`
  height: auto;
  max-width: 48%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const RightDivBefore = styled.img`
  position: absolute;
  top: -26px;
  left: 10%;
  width: 96px;
  height: 96px;
  z-index: 0;
  border: 0px solid red;
  border-radius: 50%;
`;
export const RightDivAfter = styled.img`
  content: '';
  position: absolute;
  bottom: -18px;
  left: 9%;
  background: url(assets/home/dot-patch.svg) no-repeat;
  width: 90px;
  height: 57px;
  z-index: 1;
`;
export const ParaDiv = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;
export const Description = styled.p`
  color: black;
  font-style: sans-serif;
  
`;
export const EmtyDiv = styled.div`
  width: 20px;
  padding: 0px 65px 0px 19px;
`;
export const SpreaddButton = styled.div`
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
`;
export const Title = styled.span`
  font-style: sans-serif;
  color:#212b36;
  font-size: 40px;
`;
export const LeftSideImage = styled.img``;
