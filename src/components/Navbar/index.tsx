import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          alt="PokeNext"
          height={30}
          width={30}
        />

        <h1>PokeNext</h1>
      </div>

      <ul className={styles.link_items}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}
