import { Dispatch, SetStateAction, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { TTokenData } from 'src/app/types/TTokenData'
import { CreateButton } from '../CreateButton/CreateButton'
import { setToLocalStorage } from 'src/app/helpers/setToLocalStorage'
import styles from './Token.module.css'

type TTokenProps = {
  token: TTokenData
  displayedTokens: TTokenData[]
  setDisplayedTokens: Dispatch<SetStateAction<TTokenData[]>>
}
export const Token = ({
  token,
  displayedTokens,
  setDisplayedTokens,
}: TTokenProps) => {
  const [isAlert, setIsAlert] = useState(false)

  const { company, tokenName, symbol, tokenSupply, blockchain, enabled } = token

  const handleDuplicate = () => {
    const duplicatedToken = {
      ...token,
      id: uuid(),
      tokenName: `${tokenName} (Duplicated) `,
    }
    setToLocalStorage(duplicatedToken)
    setDisplayedTokens(() => [duplicatedToken, ...displayedTokens])
    setIsAlert(true)
    setTimeout(() => setIsAlert(false), 2000)
  }
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
            handleButtonClick={handleDuplicate}
          />
          {isAlert && <p className={styles.message}>Token was Duplicated</p>}
        </li>
      </ul>
    </div>
  )
}
