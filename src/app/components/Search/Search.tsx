'use client'

import { ChangeEvent, useState } from 'react'

import styles from './Search.module.css'

export const Search = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {}
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
        // value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  )
}
