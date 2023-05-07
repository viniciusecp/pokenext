import styles from './page.module.css'

import Image from 'next/image'

import Card from '@/components/Card'

export const MAX_POKEMONS = 30
export const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'

export interface PokemonResponse {
  name: string
  url: string
}

export interface Pokemon extends PokemonResponse {
  id: number
}

async function getPokemons() {
  const res = await fetch(`${POKEMON_URL}/?limit=${MAX_POKEMONS}`)
  const data = await res.json()

  const formattedData = data.results.map(
    (pokemon: PokemonResponse, index: number) => ({
      ...pokemon,
      id: index + 1,
    }),
  )

  return formattedData
}

export default async function Home() {
  const pokemons: Pokemon[] = await getPokemons()

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>

        <Image
          src="/images/pokeball.png"
          alt="PokeNext"
          height={50}
          width={50}
        />
      </div>

      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
