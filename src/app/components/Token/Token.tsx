import { FilterButton } from '../FilterButton/FilterButton'
import styles from './Token.module.css'

export const Token = () => {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Token Name:</p>
          <p className={styles.value}>My Token</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Company:</p>
          <p className={styles.value}>Microsoft</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Symbol:</p>
          <p className={styles.value}>BTC</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Maximum token supply:</p>
          <p className={styles.value}>10000</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Blockchain:</p>
          <p className={styles.value}>Enthereum</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Supply:</p>
          <p className={styles.value}>Enabled</p>
        </li>
        <li>
          <FilterButton
            title={'Duplicate item'}
            type={'button'}
            isActive={true}
            key={'Enthereum'}
          />
        </li>
      </ul>
    </div>
  )
}
