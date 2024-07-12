import { TTokenData } from 'src/app/types/TTokenData'
import { CreateButton } from '../CreateButton/CreateButton'
import styles from './Token.module.css'

export const Token = (token: TTokenData) => {
  console.log('test', token)
  const { company, tokenName, symbol, tokenSupply, blockchain, enabled } = token
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Token Name:</p>
          <p className={styles.value}>{tokenName}</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Company:</p>
          <p className={styles.value}>{company}</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Symbol:</p>
          <p className={styles.value}>{symbol}</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Maximum token supply:</p>
          <p className={styles.value}>{tokenSupply}</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Blockchain:</p>
          <p className={styles.value}>{blockchain}</p>
        </li>
        <li className={styles.tokenInfo}>
          <p className={styles.name}>Supply:</p>
          <p className={styles.value}>{enabled ? 'Enabled' : 'Disabled'}</p>
        </li>
        <li>
          <CreateButton
            title={'Duplicate Token'}
            type={'button'}
            isActive={true}
            key={'Enthereum'}
            handleButtonClick={() => {}}
          />
        </li>
      </ul>
    </div>
  )
}
