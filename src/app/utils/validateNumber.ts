const validateNumber = (value: string) => {
  const isNumber = !isNaN(Number(value)) && value !== ''

  if (isNumber) {
    return Number(value)
  } else {
    return false
  }
}

export default validateNumber
