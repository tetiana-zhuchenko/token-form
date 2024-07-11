import styles from './InputTextNumber.module.css'

type TInputTextNumber = {
  label: string
  placeholder: string
  name: string
  type: string
}

export const InputTextNumber = ({
  label,
  placeholder,
  name,
  type,
}: TInputTextNumber) => {
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
      />
    </div>
  )
}

// <div className={styles.formItem}>
//       <label htmlFor="tokenName" className={styles.label}>
//         Token Name
//       </label>
//       <input
//         className={styles.input}
//         type="text"
//         name="tokenName"
//         id="tokenName"
//         placeholder="Enter the Name..."
//       />
//     </div>
