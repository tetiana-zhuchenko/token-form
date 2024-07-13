'use client'

import { useState } from 'react'
import { Filters } from '../components/Filters/Filters'
import { Search } from '../components/Search/Search'
import { Token } from '../components/Token/Token'
import { getFromLocalStorage } from '../helpers/getFromLocalStorage'
import styles from './page.module.css'
import { TTokenData } from '../types/TTokenData'

const MyTokens = () => {
  const myTokens = getFromLocalStorage()
  const [displayedTokens, setDisplayedTokens] = useState(myTokens)
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>My Tokens List</h1>
        <Filters
          displayedTokens={displayedTokens}
          setDisplayedTokens={setDisplayedTokens}
          myTokens={myTokens}
        />
        <Search
          displayedTokens={displayedTokens}
          setDisplayedTokens={setDisplayedTokens}
          myTokens={myTokens}
        />
        <ul className={styles.itemsList}>
          {displayedTokens.map((token) => (
            <li key={token.id}>
              <Token
                displayedTokens={displayedTokens}
                setDisplayedTokens={setDisplayedTokens}
                token={token}
              />
            </li>
          ))}
        </ul>

        <div className={styles.itemsList}></div>
      </div>
    </main>
  )
}

export default MyTokens
