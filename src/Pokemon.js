import React from "react";
import styled from "styled-components";
import useSWR from "swr";

const PokemonStyled = styled.div``;

const Pokemon = () => {
  async function fetcher() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    const data = await res.json();
    return data;
  }
  const { data } = useSWR("/api/user", fetcher, { suspense: true });

  if (!data) return <div>loading...</div>;
  return (
    <PokemonStyled>
      <img src={data.sprites.front_default} alt="img" />
      hello {data.name}!
    </PokemonStyled>
  );
};

export default Pokemon;
