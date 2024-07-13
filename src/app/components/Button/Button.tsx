import { TBlockchain } from 'src/app/types/TBlockchain'
import styles from './Button.module.css'

type TButton = {
  title: TBlockchain
  isActive: boolean
  type: 'button' | 'submit' | 'reset'
  handleButtonClick: (title: TBlockchain) => void
}

export const Button = ({
  title,
  isActive,
  type,
  handleButtonClick,
}: TButton) => {
  return (
    <button
      type={type}
      className={isActive ? styles.activeBtn : styles.button}
      onClick={() => handleButtonClick(title)}
    >
      {title}
    </button>
  )
}
