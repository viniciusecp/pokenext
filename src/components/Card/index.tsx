import styles from './styles.module.css'

import Image from 'next/image'

import { Pokemon } from '@/app/page'
import Link from 'next/link'

interface Props {
  pokemon: Pokemon
}

export default function Card({ pokemon }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        height={180}
        width={180}
      />

      <p className={styles.id}>#{pokemon.id}</p>

      <h3 className={styles.title}>{pokemon.name}</h3>

      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  )
}
