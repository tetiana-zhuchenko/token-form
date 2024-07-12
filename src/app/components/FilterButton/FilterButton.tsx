import { MouseEventHandler } from 'react'
import styles from './FilterButton.module.css'
import { TBlockchain } from 'src/app/types/TBlockchain'

type TFilterButton = {
  title: string
  isActive: boolean
  type: 'button' | 'submit' | 'reset'
  // handleButtonClick: (title: TBlockchain) => void
}

export const FilterButton = ({ title, isActive, type }: TFilterButton) => {
  return (
    <button
      type={type}
      className={isActive ? styles.activeBtn : styles.button}
      onClick={() => {}}
    >
      {title}
    </button>
  )
}
