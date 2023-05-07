import styles from './styles.module.css'

import Image from 'next/image'

import { MAX_POKEMONS, POKEMON_URL, PokemonResponse } from '@/app/page'

interface Params {
  params: {
    pokemonId: string
  }
}

interface PokemonTypes {
  type: {
    name: string
  }
}

export async function generateStaticParams() {
  const res = await fetch(`${POKEMON_URL}/?limit=${MAX_POKEMONS}`)

  const data = await res.json()

  const params = data.results.map((_: PokemonResponse, index: number) => ({
    pokemonId: (index + 1).toString(),
  }))

  return params
}

async function loadPokemon(pokemonId: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  const data = await res.json()

  return data
}

export default async function Pokemon({ params }: Params) {
  const pokemon = await loadPokemon(params.pokemonId)

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>

      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        height={200}
        width={200}
      />

      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>

      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item: PokemonTypes, index: number) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>

        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}
