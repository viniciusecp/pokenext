import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
        laboriosam minus beatae voluptatibus consequuntur, tempora totam facere
        expedita, deserunt, iusto culpa a quia consectetur aspernatur error
        aliquam incidunt eum!
      </p>

      <Image
        src="/images/charizard.png"
        alt="Charizard"
        height={300}
        width={300}
      />
    </div>
  )
}
