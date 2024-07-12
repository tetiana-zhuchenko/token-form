import { TTokenData } from '../types/TTokenData'

export const getFromLocalStorage = (): TTokenData[] => {
  const existingData = localStorage.getItem('tokens')
  if (existingData) {
    return JSON.parse(existingData)
  }
  return []
}
