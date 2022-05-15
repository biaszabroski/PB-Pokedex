import { FlatListProps } from "react-native";
import styled, { css } from "styled-components/native";


interface IPokemon {
  id: number;
  name: string;
  type: string[];
};

export const Container = styled.View`
  ${(props) => css`
    background: ${props.theme.colors.background.white};
    flex: 1;
    position: relative;
  `}
`;

export const ContainerBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 200px;

  position: absolute;
  top: 0px;
`;

export const FlatList = styled.FlatList<FlatListProps<IPokemon>>`
  padding: 0 20px;
`;

export const Content = styled.View`
  margin-bottom: 16px;
  flex: 1;
`;

export const Title = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.black};
    font-size: 32px;
    font-weight: bold;
    margin-top: 80px;
    margin-left: 20px;
  `}
`;

export const Paragraph = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.text.gray};
    font-size: 16px;
    margin: 10px 0;
    font-weight: 400;
    margin-left: 20px;
  `}
`;
