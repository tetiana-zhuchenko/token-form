'use client'

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { TTokenData } from 'src/app/types/TTokenData'
import styles from './Search.module.css'

type TSearchProps = {
  myTokens: TTokenData[]
  displayedTokens: TTokenData[]
  setDisplayedTokens: Dispatch<SetStateAction<TTokenData[]>>
}

export const Search = ({
  displayedTokens,
  setDisplayedTokens,
  myTokens,
}: TSearchProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value.toLowerCase())
    const tokensToSearch =
      displayedTokens.length > 1 ? displayedTokens : myTokens
    const filtered = tokensToSearch.filter((token) =>
      token.tokenName.toLowerCase().includes(inputValue)
    )
    setDisplayedTokens(() => [...filtered])
  }
  return (
    <div className={styles.container}>
      <label htmlFor={'search'} className={styles.label}>
        Search by Name:
      </label>
      <input
        className={styles.input}
        type="text"
        name="search"
        id="search"
        placeholder={'Enter the Name...'}
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  )
}
