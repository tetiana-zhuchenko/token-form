const validateNumber = (value: string) => {
  const isNumber = !isNaN(Number(value)) && value !== ''

  if (isNumber) {
    return Number(value)
  } else {
    console.log('err in validateNumber')
    return false
  }
}

export default validateNumber
