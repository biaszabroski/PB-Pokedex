import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";


type ContainerProps = {
  type: keyof typeof theme.colors.backgroundType;
};

export const Container = styled.View<ContainerProps>`
  ${(props) => css`
    background: ${props.theme.colors.backgroundType[props.type]};

    flex: 1;
    position: relative;
  `}
`;

export const PokemonImage = styled.Image`
  width: 250px;
  height: 250px;

  position: absolute;
  align-self: center;
  bottom: -50px;
`;

export const Content = styled.View`
  ${(props) => css`
    flex: 1;
    height: 55%;
    z-index: 0;

    background: ${props.theme.colors.background.white};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    padding: 40px 20px 20px;
  `}
`;

export const ScrollView = styled.ScrollView``;

export const Paragraph = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.type.normal};
    font-size: 24px;
    margin-top: 10px;
    font-weight: 700;
  `}
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Type = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.gray};
    font-size: 16px;
    margin-top: 10px;
    font-weight: 400;

    width: 70px;
  `}
`;

export const Value = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.gray};
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
    width: 40px;
    text-align: right;
    margin-right: 20px;
  `}
`;

export const PercentBar = styled.ScrollView`
  background: #eee;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const Percent = styled.ScrollView`
  ${(props) => css`
    background: ${props.theme.colors.type.normal};
    width: 50%;
    height: 4px;
    border-radius: 4px;
  `}
`;
