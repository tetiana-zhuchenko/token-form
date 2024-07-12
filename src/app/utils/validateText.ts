const validateText = (value: string) => {
  const trimmedValue = value.trim()
  if (/^[a-zA-Z0-9 ]+$/.test(trimmedValue)) {
    return trimmedValue
  } else {
    console.log('err in validate')
    return false
  }
}

export default validateText
