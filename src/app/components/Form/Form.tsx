'use client'

import { InputCheckbox } from '../InputCheckbox/InputCheckbox'
import { InputButtons } from '../InputButtons/InputButtons'
import { InputTextNumber } from '../InputTextNumber/InputTextNumber'
import styles from './Form.module.css'
import { InputSelect } from '../InputSelect/InputSelect'
import { FormEvent, useState } from 'react'
import { TTokenData } from 'src/app/types/TTokenData'
import { uuid } from 'uuidv4'
import { useRouter } from 'next/navigation'
import { setToLocalStorage } from 'src/app/helpers/setToLocalStorage'

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
      console.log('isFormError2', isFormError)
      setToLocalStorage(tokenData)
      router.push('./my-tokens')
    } else {
      return
    }
  }
  console.log('isFormError', isFormError)
  console.log(tokenData)
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
        isFormError={isFormError}
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
        isFormError={isFormError}
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
        isFormError={isFormError}
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
