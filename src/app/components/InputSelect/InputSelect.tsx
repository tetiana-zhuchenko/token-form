import { ChangeEvent } from 'react'
import styles from './InputSelect.module.css'
import { TTokenData } from 'src/app/types/TTokenData'
import { TInputSelectProps } from 'src/app/types/TInputProps'

export const InputSelect = ({ tokenData, setTokenData }: TInputSelectProps) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setTokenData({
      ...tokenData,
      [name]: value,
    })
  }

  return (
    <div className={styles.formItem}>
      <label htmlFor="companies-select" className={styles.label}>
        Company
      </label>
      <select
        name="company"
        id="companies-select"
        onChange={handleSelectChange}
        className={styles.input}
      >
        <option value="My Company">My Company</option>
        <option value="Google">Google</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Amazon">Amazon</option>
      </select>
    </div>
  )
}
