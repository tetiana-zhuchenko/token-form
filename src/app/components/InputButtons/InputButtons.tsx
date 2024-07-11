import { Button } from '../Button/Button'
import styles from './InputButtons.module.css'

export const InputButtons = () => {
  return (
    <div>
      <p className={styles.title}>Blockchain</p>
      <div className={styles.wrapper}>
        <Button title={'Enthereum'} isActive={true} type={'button'} />
        <Button
          title={'Binance Smart Chain'}
          isActive={false}
          type={'button'}
        />
      </div>
    </div>
  )
}
