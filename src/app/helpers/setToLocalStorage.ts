'use client'

import { TTokenData } from '../types/TTokenData'

export const setToLocalStorage = (data: TTokenData) => {
  const existingData = localStorage.getItem('tokApp')
  let tokens = []
  if (existingData) {
    tokens = JSON.parse(existingData)
  }
  tokens.push(data)
  localStorage.setItem('tokApp', JSON.stringify(tokens))
}
