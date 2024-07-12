'use client'

import { InputCheckbox } from '../InputCheckbox/InputCheckbox'
import { InputButtons } from '../InputButtons/InputButtons'
import { InputTextNumber } from '../InputTextNumber/InputTextNumber'
import styles from './Form.module.css'
import { Button } from '../Button/Button'
import { InputSelect } from '../InputSelect/InputSelect'
import { useState } from 'react'
import { TTokenData } from 'src/app/types/TTokenData'

export const Form = () => {
  const [tokenData, setTokenData] = useState<TTokenData>({
    company: '',
    tokenName: '',
    symbol: '',
    tokenSupply: null,
    blockchain: 'Enthereum',
    enabled: false,
  })

  // const handleClick = async () => {
  //   if (!isError) {
  //     window.localStorage.setItem('query', JSON.stringify(validatedValue))
  //     router.push('./movies')
  //   } else {
  //     return
  //   }
  // }

  console.log(tokenData)
  return (
    <form className={styles.form}>
      <InputSelect tokenData={tokenData} setTokenData={setTokenData} />
      <InputTextNumber
        key="tokenName"
        label={'Token Name'}
        placeholder={'ex: Bitcoin'}
        name={'tokenName'}
        type={'text'}
        tokenData={tokenData}
        setTokenData={setTokenData}
      />
      <InputTextNumber
        key="symbol"
        label={'Symbol'}
        placeholder={'ex: BTC'}
        name={'symbol'}
        type={'text'}
        tokenData={tokenData}
        setTokenData={setTokenData}
      />
      <InputTextNumber
        key="tokenSupply"
        label={'Maximum token supply'}
        placeholder={'ex: 100000'}
        name={'tokenSupply'}
        type={'number'}
        tokenData={tokenData}
        setTokenData={setTokenData}
      />
      <InputButtons tokenData={tokenData} setTokenData={setTokenData} />
      <InputCheckbox />
      <button type="submit" className={styles.buttonSubmit}>
        SAVE DRAFT
      </button>
    </form>
  )
}
