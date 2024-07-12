'use client'

import { useState } from 'react'
import { FilterButton } from '../FilterButton/FilterButton'
import styles from './Filters.module.css'

export const Filters = () => {
  const [isActive, setIsActive] = useState(true)
  return (
    <div className={styles.container}>
      <FilterButton
        title={'Filter by supply'}
        isActive={isActive}
        type={'button'}
        key={'Enthereum'}
      />

      <FilterButton
        title={'Filter by chain'}
        isActive={isActive}
        type={'button'}
        key={'Enthereum'}
      />

      <FilterButton
        title={'Add new Token'}
        isActive={isActive}
        type={'button'}
        key={'Enthereum'}
      />
    </div>
  )
}
