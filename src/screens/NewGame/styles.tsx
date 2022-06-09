import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
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
  height: 125px;
  margin-bottom: 15px;
`;

export const TeamContent = styled.View`
background-color: rgba(255, 255, 255, .75)
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

export const PlayersList = styled.ScrollView`
  padding-left: 12px;
  padding-right: 12px;
  height: 450px;
`;


export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Middle = styled.View``;

export const RightSide = styled.View``;