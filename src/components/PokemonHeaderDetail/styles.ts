import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

type CardProps = {
    type: keyof typeof theme.colors.backgroundType;
  };

export const ContainerBackgroundImage = styled.ImageBackground`
  width: 190px;
  height: 190px;
  opacity: 0.3;

  position: absolute;
  bottom: -20px;
  right: -20px;
`;

export const DotsBackgroundImage = styled.ImageBackground`
  width: 74px;
  height: 32px;

  position: absolute;
  bottom: 120px;
  left: 60px;
`;

export const Header = styled.View`
  margin-top: 30px;
  padding: 30px 20px;

  position: relative;
  height: 45%;

  z-index: 1;
`;
export const GoBackButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  justify-content: center;

  margin-bottom: 20px;
`;
export const GoBackImage = styled.Image`
  width: 25px;
  height: 25px;
`;
export const PokemonName = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.white};
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
  `}
`;

export const PokemonNumber = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.white};
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
  `}
`;

export const TypeList = styled.View`
  flex-direction: row;
`;
export const Badge = styled.View<CardProps>`
  ${(props) => css`
    background: ${props.theme.colors.backgroundType[props.type]};
    border: solid 1px rgba(0, 0, 0, 0.40);
    border-radius: 3px;
    padding: 5.5px 5px;
    margin-top: 5px;
    margin-right: 5px;
  `}
`;

export const BadgeText = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.white};
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
  `}
`;
export const PokemonImage = styled.Image`
  width: 250px;
  height: 250px;

  position: absolute;
  align-self: center;
  bottom: -50px;
`;