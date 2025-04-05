'use client'

import { useState } from 'react'
import { Token } from '../components/Token/Token'
import { getFromLocalStorage } from '../helpers/getFromLocalStorage'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const MyTokens = () => {
  const myTokens = getFromLocalStorage()
  const [displayedTokens, setDisplayedTokens] = useState(myTokens)
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <button type="button" className={styles.button} onClick={handleBack}>
          Back
        </button>
        <h1 className={styles.title}>My Tokens List</h1>
        <ul className={styles.itemsList}>
          {displayedTokens.map((token) => (
            <li key={token.id}>
              <Token token={token} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default MyTokens
