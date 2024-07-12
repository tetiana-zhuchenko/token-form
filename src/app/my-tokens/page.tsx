'use client'

import { Filters } from '../components/Filters/Filters'
import { Search } from '../components/Search/Search'
import { Token } from '../components/Token/Token'
import styles from './page.module.css'

const MyTokens = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>My Tokens List</h1>

        <Filters />
        <Search />
        <ul className={styles.itemsList}>
          <li>
            <Token />
          </li>
          <li>
            <Token />
          </li>
          <li>
            <Token />
          </li>
          <li>
            <Token />
          </li>
        </ul>

        <div className={styles.itemsList}></div>
      </div>
    </main>
  )
}

export default MyTokens
