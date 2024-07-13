import { useState } from 'react'
import { TInputSelectProps } from 'src/app/types/TInputProps'
import { TBlockchain } from 'src/app/types/TBlockchain'
import { Button } from '../Button/Button'
import styles from './InputButtons.module.css'

export const InputButtons = ({
  tokenData,
  setTokenData,
}: TInputSelectProps) => {
  const [isActive, setIsActive] = useState(true)

  const handleButtonClick = (title: TBlockchain) => {
    setIsActive(!isActive)
    setTokenData(() => ({
      ...tokenData,
      blockchain: title,
    }))
  }
  return (
    <div>
      <p className={styles.title}>Blockchain</p>
      <div className={styles.wrapper}>
        <Button
          title={'Enthereum'}
          isActive={isActive}
          type={'button'}
          key={'Enthereum'}
          handleButtonClick={handleButtonClick}
        />
        <Button
          title={'Binance Smart Chain'}
          isActive={!isActive}
          type={'button'}
          key={'Binance Smart Chain'}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  )
}
