import * as S from "./DetalhesScreen.styles";

import React, { useState, useEffect } from "react";

import { api } from "../../api";
import PokemonHeaderDetail from "../../components/PokemonHeaderDetail";

type IDetalhesProps = {
  route: any;
  navigation: any;
};

export type IPokemonDetalhe = {
  id: number;
  name: string;
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
};

export function DetalhesScreen({ route, navigation }: IDetalhesProps) {
  const { id } = route.params;
  const [detalhesPokemon, setDetalhesPokemon] = useState<IPokemonDetalhe>({
    id: 0,
    name: "",
    type: [""],
    base: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      "Sp. Attack": 0,
      "Sp. Defense": 0,
      Speed: 0,
    },
  });

  function handleNavigation() {
    navigation.navigate("ListaScreen");
  }

  useEffect(() => {
    async function carregarDetalhes() {
      const response = await api.get(`pokemons/${id}`);
      setDetalhesPokemon(response.data);
    }

    carregarDetalhes();
  }, []);

  return (
    <S.Container type={detalhesPokemon.type[0] ? detalhesPokemon.type[0].toLowerCase() as any : 'normal'}>
      
      <PokemonHeaderDetail 
        id={id}
        detalhesPokemon={detalhesPokemon}
        handleNavigation={handleNavigation}
      />
      <S.Content>
        <S.ScrollView>
          <S.Paragraph maxFontSizeMultiplier={2}>Status</S.Paragraph>

          <S.Status>
            <S.Type maxFontSizeMultiplier={2}>HP</S.Type>
            <S.Value>{detalhesPokemon.base.HP}</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type maxFontSizeMultiplier={2}>Attack</S.Type>
            <S.Value>{detalhesPokemon.base.Attack}</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type maxFontSizeMultiplier={2}>Defense</S.Type>
            <S.Value>{detalhesPokemon.base.Defense}</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type maxFontSizeMultiplier={2}>Sp. Atk</S.Type>
            <S.Value>{detalhesPokemon.base["Sp. Attack"]}</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type maxFontSizeMultiplier={2}>Sp Def</S.Type>
            <S.Value>{detalhesPokemon.base["Sp. Defense"]}</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type maxFontSizeMultiplier={2}>Speed</S.Type>
            <S.Value>{detalhesPokemon.base.Speed}</S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>

          <S.Status>
            <S.Type maxFontSizeMultiplier={2}>Total</S.Type>
            <S.Value>
              {Object.values(detalhesPokemon.base).reduce(function(soma, i) {
                return soma + i;
              })}
            </S.Value>

            <S.PercentBar>
              <S.Percent />
            </S.PercentBar>
          </S.Status>
        </S.ScrollView>
      </S.Content>
    </S.Container>
  );
}
