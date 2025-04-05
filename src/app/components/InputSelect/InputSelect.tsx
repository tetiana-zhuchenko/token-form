import { ChangeEvent } from 'react'
import { TInputSelectProps } from 'src/app/types/TInputProps'
import { initialCompanies } from '../../../../data/initialCompanies'
import styles from './InputSelect.module.css'

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
        required
      >
        {initialCompanies.map((company) => (
          <option key={company.id} value={company.title}>
            {company.title}
          </option>
        ))}
      </select>
    </div>
  )
}
