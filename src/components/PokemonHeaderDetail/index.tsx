
import { View } from "react-native";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg.png";
import dotsCardImage from "../../global/assets/Pattern.png";
import backImage from "../../global/assets/Back.png";
import * as S from "./styles";
import { IPokemonDetalhe } from "../../screens/DetalhesScreen/DetalhesScreen";


interface PokemonHeaderDetailProps {
    id: number
    detalhesPokemon: IPokemonDetalhe
    handleNavigation: () => void
}


const PokemonHeaderDetail = ({ id, detalhesPokemon, handleNavigation }: PokemonHeaderDetailProps) => {
    return (
        <S.Header>

        <S.ContainerBackgroundImage source={pokeballBackgroundImage} />
        <S.DotsBackgroundImage source={dotsCardImage} />

        <S.GoBackButton onPress={handleNavigation}>
          <S.GoBackImage source={backImage} />
        </S.GoBackButton>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <S.PokemonName maxFontSizeMultiplier={2}>{detalhesPokemon.name}</S.PokemonName>
            <S.TypeList>
              {detalhesPokemon.type.map((item, index) => {
                  console.log(item)
                  return (
                <S.Badge type={item ? item.toLowerCase() as any : 'normal'} key={index}>
                  <S.BadgeText maxFontSizeMultiplier={2}>{item}</S.BadgeText>
                </S.Badge>
              )})}
            </S.TypeList>
          </View>
          <S.PokemonNumber maxFontSizeMultiplier={2}>#{id.toString().padStart(3, "0")}</S.PokemonNumber>
        </View>

        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
      </S.Header>
    )
}

export default PokemonHeaderDetail