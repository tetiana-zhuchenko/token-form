'use client'

import { TTokenData } from '../types/TTokenData'

export const getFromLocalStorage = (): TTokenData[] => {
  if (typeof window !== 'undefined') {
    const existingData = localStorage.getItem('tokApp')
    if (existingData) {
      return JSON.parse(existingData)
    }
  }
  return []
}
