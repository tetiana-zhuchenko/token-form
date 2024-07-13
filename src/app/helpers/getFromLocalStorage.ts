'use client'

import { TTokenData } from '../types/TTokenData'

export const getFromLocalStorage = (): TTokenData[] => {
  const existingData = localStorage.getItem('tokApp')
  if (existingData) {
    return JSON.parse(existingData)
  }
  return []
}
