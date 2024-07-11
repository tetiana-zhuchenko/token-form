import { InputCheckbox } from '../InputCheckbox/InputCheckbox'
import { InputButtons } from '../InputButtons/InputButtons'
import { InputTextNumber } from '../InputTextNumber/InputTextNumber'
import styles from './Form.module.css'
import { Button } from '../Button/Button'
import { InputSelect } from '../InputSelect/InputSelect'

export const Form = () => {
  return (
    <form className={styles.form}>
      <InputSelect />
      <InputTextNumber
        label={'Token Name'}
        placeholder={'Enter the Name...'}
        name={'tokenName'}
        type={'text'}
      />
      <InputTextNumber
        label={'Symbol'}
        placeholder={'Enter the Symbol...'}
        name={'symbol'}
        type={'text'}
      />
      <InputTextNumber
        label={'Maximum token supply'}
        placeholder={'Enter the Maximum Token Supply...'}
        name={'tokenSupply'}
        type={'number'}
      />
      <InputButtons />
      <InputCheckbox />
      <Button title={'SAVE DRAFT'} isActive={true} type={'submit'} />
    </form>
  )
}
