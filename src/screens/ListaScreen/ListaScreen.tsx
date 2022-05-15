import React, { useState, useEffect } from "react";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";
import { CardPokemon } from "../../components/CardPokemon";
import { api } from "../../api";

import * as S from "./ListaScreen.styles";
import { NavigationScreenProps } from "../../navigation/types";

type PokemonProps = {
  id: number;
  name: string;
  type: string[];
};

export function ListaScreen(props: NavigationScreenProps<"ListaScreen">) {
  const { navigation } = props
  const [listaPokemon, setListaPokemon] = useState<PokemonProps[]>([]);

  function handleNavigation(id: number) {
    navigation.navigate("DetalhesScreen", {
      id
    });
  }

  useEffect(() => {
    async function carregarLista() {
      const response = await api.get("pokemons");
      setListaPokemon(response.data);
    }

    carregarLista();
  }, []);

  return (
    <S.Container>
      <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

        <S.Title maxFontSizeMultiplier={2}>Pokédex</S.Title>
        <S.Paragraph maxFontSizeMultiplier={2}>Encontre todos os pokémons em um só lugar.</S.Paragraph>

        <S.Content>
          <S.FlatList 
            data={listaPokemon}
            renderItem={({item, index}: any) => (
              <CardPokemon
                key={index}
                id={item.id}
                nome={item.name}
                tipo={item.type}
                handleNavigation={handleNavigation}
              />
            )}
          />
          {/* {listaPokemon.map((pokemon, index) => (
            <CardPokemon
              key={index}
              id={pokemon.id}
              nome={pokemon.name}
              tipo={pokemon.type}
            />
          ))} */}
        </S.Content>
    </S.Container>
  );
}
