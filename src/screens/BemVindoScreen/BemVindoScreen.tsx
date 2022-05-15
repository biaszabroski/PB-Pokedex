import React from "react";
import AnimatedLottieView from "lottie-react-native";

import pokebolaAnimation from "./pokebola.json";

import * as S from "./BemVindoScreen.styles";

import { NavigationScreenProps } from "../../navigation/types";

export function BemVindoScreen(props: NavigationScreenProps<"BemVindoScreen">) {
  const { navigation } = props;

  function handleNavigation() {
    navigation.navigate("ListaScreen");
  }

  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <AnimatedLottieView autoPlay source={pokebolaAnimation} loop />
        </S.WrapperAnimation>
        <S.Title maxFontSizeMultiplier={2}>Bem vindo</S.Title>
        <S.Paragraph maxFontSizeMultiplier={2}>Encontre todos os pokémons em um só lugar</S.Paragraph>
      </S.Content>

      <S.Button activeOpacity={0.7} onPress={handleNavigation}>
        <S.ButtonText maxFontSizeMultiplier={2}>Entrar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
