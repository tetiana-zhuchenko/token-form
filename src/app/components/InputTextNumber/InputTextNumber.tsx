import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import styles from './InputTextNumber.module.css'
import { TTokenData } from 'src/app/types/TTokenData'
import validateText from 'src/app/utils/validateText'
import validateNumber from 'src/app/utils/validateNumber'

type TInputTextNumber = {
  label: string
  placeholder: string
  name: string
  type: 'text' | 'number'
  tokenData: TTokenData
  setTokenData: Dispatch<SetStateAction<TTokenData>>
  isFormError: boolean
  setIsFormError: Dispatch<SetStateAction<boolean>>
}

export const InputTextNumber = ({
  label,
  placeholder,
  name,
  type,
  tokenData,
  setTokenData,
  isFormError,
  setIsFormError,
}: TInputTextNumber) => {
  const [inputInfo, setInputInfo] = useState({ value: '', name: '' })
  const [validatedValue, setValidatedValue] = useState<string | number>('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (inputInfo.value) {
      if (type === 'text') {
        const validatedInput = validateText(inputInfo.value)
        if (validatedInput) {
          setIsError(false)
          setIsFormError(false)
          setValidatedValue(validatedInput)
          setTokenData(() => ({
            ...tokenData,
            [inputInfo.name]: validatedValue,
          }))
        } else {
          setIsError(true)
          setIsFormError(true)
        }
      } else if (type === 'number') {
        const validNumber = validateNumber(inputInfo.value)
        if (validNumber) {
          setIsError(false)
          setIsFormError(false)
          setValidatedValue(Number(validNumber))
          setTokenData(() => ({
            ...tokenData,
            [inputInfo.name]: validatedValue,
          }))
        } else {
          setIsError(true)
          setIsFormError(true)
        }
      }
    }
  }, [inputInfo, type, validatedValue])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputInfo(() => ({ value: value, name: name }))
  }

  return (
    <div className={styles.formItem}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputInfo.value}
        min="0"
        max="10000000"
        required
        onChange={handleInputChange}
      />
      {isError && <p className={styles.errorMessage}>Invalid input</p>}
    </div>
  )
}
