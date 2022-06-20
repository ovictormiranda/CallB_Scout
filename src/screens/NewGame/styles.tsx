import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const LeftSide = styled.View`
  width: 283px;
  height: 100%;
  padding-left: 30px;
`;

export const Content = styled.View`
  width: 100%;
  height: 662px;
  margin-bottom: 15px;
`;

export const Focused = styled.View`
/*   background-color:  ${({ theme }) => theme.colors.dark_background};
  opacity: .5; */
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

export const Name = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const FirstName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color:  ${({ theme }) => theme.colors.light_text};
`;

export const LastName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  color:  ${({ theme }) => theme.colors.light_text};
  margin-left: 3px;
`;

export const BioInfo = styled.Text`
  margin-top: 8px;
  text-align: right;
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

export const Middle = styled.View`
  width: 627px;
  height: 100%;
 /*  background-color: orange; */
  padding-top: 8px;
  padding-bottom: 26px;
  padding-left: 37px;
  padding-right: 37px;
`;

export const PositiveActions = styled.View`
  width: 552px;
  height: 80px;
/*   background-color: blue; */
  align-items: center;
`;

export const FieldWrapper = styled.View`
  padding: 10px;
  width: 100%;
  height: 578px;
`;

export const Field = styled.View`
  width: 100%;
  height: 578px;
  align-items: center;
  padding-right: 58px;
  padding-left: 64px;
  padding-top: 13px;
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
 /*  background-color: #ffffff11; */
  flex-direction: row;
`;

export const FourC = styled.View`
  height: 100%;
  width: 130px;
  margin-left: 4px;
/*   background-color: #ffffff11; */
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
 /*  background-color: #ffffff11; */
  flex-direction: row;
  `;

  export const ThreeB = styled.View`
    height: 100%;
    width: 141px;
    margin-left: 4px;
   /*  background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const ThreeC = styled.View`
    height: 100%;
    width: 130px;
    margin-left: 4px;
 /*    background-color: #ffffff11; */
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
 /*    background-color: #ffffff11; */
    flex-direction: row;
  `;

  export const TwoB = styled.View`
    height: 100%;
    width: 141px;
    margin-left: 4px;
   /*  background-color: #ffffff11; */
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
/*   background-color: blue; */
`;





export const RightSide = styled.View`
  width: 283px;
  height: 100%;
  padding-right: 30px;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;


export const TestBox = styled.View`
  width: 100px;
  height: 100px;
  background-color: orange;
  box-shadow: 100px 5px 5px black;
`;
