import styles from './InputCheckbox.module.css'

export const InputCheckbox = () => {
  return (
    <div>
      <p className={styles.checkboxRadioTitle}>Supply</p>
      <div className={styles.checkboxRadio}>
        <input
          className={styles.inputCheckboxRadio}
          type="checkbox"
          name="supply"
          id="supply"
        />
        <label htmlFor="supply" className={styles.labelCheckboxRadio}>
          Enabled
        </label>
      </div>
    </div>
  )
}
