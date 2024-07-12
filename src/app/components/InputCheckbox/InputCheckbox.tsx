import { TInputSelectProps } from 'src/app/types/TInputProps'
import styles from './InputCheckbox.module.css'
import { ChangeEvent } from 'react'

export const InputCheckbox = ({
  tokenData,
  setTokenData,
}: TInputSelectProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setTokenData(() => ({
      ...tokenData,
      enabled: checked,
    }))
  }
  return (
    <div>
      <p className={styles.checkboxRadioTitle}>Supply</p>
      <div className={styles.checkboxRadio}>
        <input
          className={styles.inputCheckboxRadio}
          type="checkbox"
          name="supply"
          id="supply"
          onChange={handleInputChange}
        />
        <label htmlFor="supply" className={styles.labelCheckboxRadio}>
          Enabled
        </label>
      </div>
    </div>
  )
}
