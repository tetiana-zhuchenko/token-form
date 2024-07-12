const validateText = (value: string) => {
  const trimmedValue = value.trim()
  if (/^[a-zA-Z0-9 ]+$/.test(trimmedValue)) {
    return trimmedValue
  } else {
    return false
  }
}

export default validateText
