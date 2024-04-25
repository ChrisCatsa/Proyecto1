import React from "react";
import useGetPokemonListByType from "../../hooks/useGetPokemonListByType";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { Grid } from "../shared/Grid/Grid";
import { useParams } from "react-router";

export const PokemonByTypeList = () => {
  const { typeName } = useParams();
  const { pokemonList } = useGetPokemonListByType(typeName ?? "");

  return (
    <Grid>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
      ))}
    </Grid>
  );
};
