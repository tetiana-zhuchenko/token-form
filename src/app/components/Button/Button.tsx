import styles from './Button.module.css'

type TButton = {
  title: string
  isActive: boolean
  type: 'button' | 'submit' | 'reset'
}

export const Button = ({ title, isActive, type }: TButton) => {
  return (
    <button
      type={type}
      className={
        type === 'submit'
          ? styles.buttonSubmit
          : isActive
          ? styles.activeBtn
          : styles.button
      }
    >
      {title}
    </button>
  )
}
