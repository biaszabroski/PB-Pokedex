import React from "react";

import pokeballCardImage from "../../global/assets/Pokeball.png";
import dotsCardImage from "../../global/assets/Pattern.png";

import * as S from "./styles";


export type CardPokemonProps = {
  id: number;
  nome: string;
  tipo: string[];
  handleNavigation: (id: number) => void 
};

export function CardPokemon({ id, nome, tipo, handleNavigation }: CardPokemonProps) {
  return (
    <S.Card onPress={() => handleNavigation(id)} activeOpacity={0.9} tipo={tipo[0].toLowerCase() as any }>
      <S.CardLeft>
        <S.CardDotsBackgroundImage source={dotsCardImage} />

        <S.CardPokemonNumber>
          #{id.toString().padStart(3, "0")}
        </S.CardPokemonNumber>
        <S.CardPokemonName>{nome}</S.CardPokemonName>

        <S.CardPokemonTypeList>
          {tipo.map((item, index) => (
            <S.CardPokemonTypeBadge type={item ? item.toLowerCase() as any : 'normal'} key={index}>
              <S.CardPokemonType>{item}</S.CardPokemonType>
            </S.CardPokemonTypeBadge>
          ))}
        </S.CardPokemonTypeList>
      </S.CardLeft>

      <S.CardRigth>
        <S.CardPokemonBackgroundImage source={pokeballCardImage} />

        <S.CardPokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
      </S.CardRigth>
    </S.Card>
  );
}
