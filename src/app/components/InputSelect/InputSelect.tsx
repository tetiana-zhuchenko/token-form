import styles from './InputSelect.module.css'

export const InputSelect = () => {
  return (
    <div className={styles.formItem}>
      <label htmlFor="companies-select" className={styles.label}>
        Company
      </label>

      <select name="companies" id="companies-select" className={styles.input}>
        <option value="My Company">My Company</option>
        <option value="Google">Google</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Amazon">Amazon</option>
      </select>
    </div>
  )
}
