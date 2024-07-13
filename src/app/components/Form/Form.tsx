'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { InputCheckbox } from '../InputCheckbox/InputCheckbox'
import { InputButtons } from '../InputButtons/InputButtons'
import { InputTextNumber } from '../InputTextNumber/InputTextNumber'
import { InputSelect } from '../InputSelect/InputSelect'
import { TTokenData } from 'src/app/types/TTokenData'
import { setToLocalStorage } from 'src/app/helpers/setToLocalStorage'
import styles from './Form.module.css'

export const Form = () => {
  const router = useRouter()
  const [isFormError, setIsFormError] = useState(false)
  const [tokenData, setTokenData] = useState<TTokenData>({
    company: 'My Company',
    tokenName: '',
    symbol: '',
    tokenSupply: null,
    blockchain: 'Enthereum',
    enabled: false,
    id: uuid(),
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isFormError) {
      setToLocalStorage(tokenData)
      router.push('./my-tokens')
    } else {
      return
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <InputSelect tokenData={tokenData} setTokenData={setTokenData} />
      <InputTextNumber
        key="tokenName"
        label={'Token Name'}
        placeholder={'ex: Bitcoin'}
        name={'tokenName'}
        type={'text'}
        tokenData={tokenData}
        setTokenData={setTokenData}
        setIsFormError={setIsFormError}
      />
      <InputTextNumber
        key="symbol"
        label={'Symbol'}
        placeholder={'ex: BTC'}
        name={'symbol'}
        type={'text'}
        tokenData={tokenData}
        setTokenData={setTokenData}
        setIsFormError={setIsFormError}
      />
      <InputTextNumber
        key="tokenSupply"
        label={'Maximum token supply'}
        placeholder={'ex: 100000'}
        name={'tokenSupply'}
        type={'number'}
        tokenData={tokenData}
        setTokenData={setTokenData}
        setIsFormError={setIsFormError}
      />
      <InputButtons tokenData={tokenData} setTokenData={setTokenData} />
      <InputCheckbox tokenData={tokenData} setTokenData={setTokenData} />
      <button type="submit" className={styles.buttonSubmit}>
        SAVE DRAFT
      </button>
    </form>
  )
}
