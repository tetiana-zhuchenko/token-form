'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreateButton } from '../CreateButton/CreateButton'
import { TTokenData } from 'src/app/types/TTokenData'
import { Button } from '../Button/Button'
import { TBlockchain } from 'src/app/types/TBlockchain'
import styles from './Filters.module.css'

type TFiltersProps = {
  myTokens: TTokenData[]
  setDisplayedTokens: Dispatch<SetStateAction<TTokenData[]>>
}

export const Filters = ({ setDisplayedTokens, myTokens }: TFiltersProps) => {
  const router = useRouter()
  const [isActive, setIsActive] = useState('All Chains')

  const filterByChain = (title: TBlockchain): void => {
    setIsActive(title)
    title === 'All Chains'
      ? setDisplayedTokens([...myTokens])
      : setDisplayedTokens(() =>
          myTokens.filter((token) => token.blockchain === title)
        )
  }

  const addTokenHandler = () => router.push('./')

  return (
    <div className={styles.container}>
      <Button
        title={'Enthereum'}
        isActive={isActive === 'Enthereum'}
        type={'button'}
        key={'Enthereum'}
        handleButtonClick={filterByChain}
      />
      <Button
        title={'Binance Smart Chain'}
        isActive={isActive === 'Binance Smart Chain'}
        type={'button'}
        key={'Binance Smart Chain'}
        handleButtonClick={filterByChain}
      />

      <Button
        title={'All Chains'}
        isActive={isActive === 'All Chains'}
        type={'button'}
        key={'Chain'}
        handleButtonClick={filterByChain}
      />

      <CreateButton
        title={'Add new Token'}
        isActive={true}
        type={'button'}
        key={'Add new Token'}
        handleButtonClick={addTokenHandler}
      />
    </div>
  )
}
