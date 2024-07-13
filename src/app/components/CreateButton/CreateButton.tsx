import styles from './CreateButton.module.css'

type TCreateButton = {
  title: string
  isActive: boolean
  type: 'button' | 'submit' | 'reset'
  handleButtonClick: (chain: string) => void
}

export const CreateButton = ({
  title,
  isActive,
  type,
  handleButtonClick,
}: TCreateButton) => {
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
