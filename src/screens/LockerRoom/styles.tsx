import styled from 'styled-components/native';

interface Props {
  isPositive: boolean;
}

interface FocusedProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const ActionPoint = styled.View<Props>`
  height: 10px;
  width: 10px;
  position: absolute;
  border-radius: 5px;
  background-color: ${({ isPositive, theme }) => 
    isPositive ? theme.colors.success : theme.colors.alert };
`;

export const LeftSide = styled.View`
  width: 283px;
  height: 100%;
  padding-left: 30px;
`;

export const Content = styled.View<FocusedProps>`
  width: 100%;
  height: 662px;
  margin-bottom: 15px;
  opacity:  ${({ isActive }) => 
  isActive ? 1 : 0.5 };
`;

export const Focused = styled.View<FocusedProps>`
  background-color:  ${({ isActive, theme }) => 
  isActive ? theme.colors.transparent : theme.colors.semi_transparent };
  width: 100%;
  height: 100%;
`;

export const SelectedPlayer = styled.View`
  height: 70px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 15px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.light_01};
  justify-content: space-between;
  padding-right: 5px;
`;

export const ImagePlayer = styled.Image`
  height: 125px;
  width: 125px;
  margin-top: -40px;

`;

export const BioPlayer = styled.View`
 align-items: flex-end;
 margin-top: -40px;
`;

export const BioPlayerVisitant = styled.View`
 align-items: flex-start;
 margin-top: -40px;
`;

export const Name = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const FirstName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color:  ${({ theme }) => theme.colors.dark_text};
`;

export const LastName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  color:  ${({ theme }) => theme.colors.dark_text};
  margin-left: 3px;
`;

export const BioInfo = styled.Text`
  margin-top: 8px;
  text-align: right;
`;

export const BioInfoVisitant = styled.Text`
  margin-top: 8px;
  text-align: left;
  padding-left: 5px;
`;





export const TeamContent = styled.View`
  background-color: rgba(255, 255, 255, .75);
  margin-top: 10px;
/*   background-color:  ${({ theme }) => theme.colors.light_background_main};
  opacity: .75; */
`;

export const TeamInfo = styled.View`
  height: 72px;
  width: 100%;
  padding: 12px;
  flex-direction: row;
  
  background-color: rgba(255, 255, 255, .65)
/*   background-color:  ${({ theme }) => theme.colors.light_background_main};
  opacity: .65; */
`;


export const Shield = styled.View`
  height: 52px;
  width:  52px;
  background-color: red;
  margin-right: 15px;
`;

export const ShieldVisitant = styled.View`
  height: 52px;
  width:  52px;
  background-color: red;
  margin-left: 15px;
`;

export const WrapperNameScore = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 160px;
`;

export const TeamName = styled.Text`
  color:  ${({ theme }) => theme.colors.dark_text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: 16px;
  `;

export const Score = styled.Text`
  color:  ${({ theme }) => theme.colors.dark_text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: 32px;
`;


export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterVisitantSide = styled.View`
  height: 75px;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const NewRightSideOldMiddle = styled.View`
  width: 500px;
  height: 100%;
  /* background-color: orange; */
  padding-top: 8px;
  padding-bottom: 26px;
  /* padding-left: 60px; */
  padding-right: 30px;

`;

export const PositiveActions = styled.View`
  width: 100%;
  height: 80px;
  /* background-color: blue; */
  align-items: flex-end;
  padding-left: 25px;
`;

export const FieldWrapper = styled.View`
  /* background-color: red; */
  padding-top: 10px;
  padding-bottom: 10px; 
  align-items: center;
  width: 100%;
  height: 578px;
`;

export const Field = styled.View`
  width: 460px;
  height: 578px;
  padding-top: 13px;
  padding-left: 30px;
  /* background-color: #0000005c; */
`;

export const FourthZone = styled.View`
  height: 128px;
  width: 100%;
  flex-direction: row;
`;

export const FourA = styled.View`
  height: 100%;
  width: 132px;
  /* background-color: #37319667; */
  flex-direction: row;
`;

export const FourB = styled.View`
  height: 100%;
  width: 141px;
  margin-left: 4px;
  /* background-color: #ffffff11; */
  flex-direction: row;
`;

export const FourC = styled.View`
  height: 100%;
  width: 130px;
  margin-left: 4px;
  /* background-color: #ffffff11; */
  flex-direction: row;
`;

export const ThirdZone = styled.View`
  margin-top: 4px;
  height: 124px;
  width: 100%;
  flex-direction: row;
`;

  export const ThreeA = styled.View`
  height: 100%;
  width: 132px;
  /* background-color: #ffffff11; */
  flex-direction: row;
  `;

  export const ThreeB = styled.View`
    height: 100%;
    width: 141px;
    margin-left: 4px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const ThreeC = styled.View`
    height: 100%;
    width: 130px;
    margin-left: 4px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const SecondZone = styled.View`
    margin-top: 6px;
    height: 128px;
    width: 100%;
    flex-direction: row;
  `;

  export const TwoA = styled.View`
    height: 100%;
    width: 132px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const TwoB = styled.View`
    height: 100%;
    width: 141px;
    margin-left: 4px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const TwoC = styled.View`
    height: 100%;
    width: 130px;
    margin-left: 4px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const FirstZone = styled.View`
    margin-top: 4px;
    height: 128px;
    width: 100%;
    flex-direction: row;
  `;

  export const OneA = styled.View`
    height: 100%;
    width: 132px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const OneB = styled.View`
    height: 100%;
    width: 141px;
    margin-left: 4px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const OneC = styled.View`
    height: 100%;
    width: 130px;
    margin-left: 4px;
    /* background-color: #ffffff11; */
    flex-direction: row;
  `;


export const NegativeActions = styled.View`
  width: 100%;
  height: 80px;
 /*  background-color: blue; */
  padding-left: 25px;
`;



export const NewMiddleOldRightSide = styled.View`
  width: 410px;
  height: 100%;
  padding-left: 30px;
  /* background-color: blueviolet; */
`;


  export const TimeSection = styled.View`
    width: 100%;
  `;

  export const TimeInMinutesSection = styled.View`
    width: 100%;
  `;


  export const HeaderMiddle = styled.View`
    height: 134px;
  /*   background-color: pink; */

    padding-top: 10px;
    padding-bottom: 58px;
  `;
  export const TitleMiddle = styled.Text`
    font-size: 60px;
    color:  ${({ theme }) => theme.colors.dark_background};
    font-family: ${({ theme }) => theme.fonts.primary_700I};
  `;

  export const SubtitleMiddle = styled.Text`
    font-size: 32px;
    color:  ${({ theme }) => theme.colors.dark_background};
    font-family: ${({ theme }) => theme.fonts.primary_300I};
    margin-left: 180px;
  `;


  export const MainMiddle = styled.View`
    height: 524px;
    background-color: rgba(255, 255, 255, .65)
  `;

  export const FooterMiddle = styled.View`
    padding-top: 18px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;
