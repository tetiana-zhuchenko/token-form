import { Dispatch, SetStateAction } from 'react'
import { TTokenData } from './TTokenData'

export type TInputSelectProps = {
  tokenData: TTokenData
  setTokenData: Dispatch<SetStateAction<TTokenData>>
}
