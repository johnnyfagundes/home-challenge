import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Details, Fund, Portfolio } from '../types/FinancesTypes'
import { DETAILS, FUNDS, PORTFOLIO } from '../mock/data'
import { RootState } from '../app/store'

const REDUCER_NAME = 'finances'

interface FinancesState {
  funds: Fund[]
  portfolio: Portfolio
  detailsList: Details[]
  details: Details
}

const initialState = {
  funds: FUNDS,
  portfolio: PORTFOLIO,
  detailsList: DETAILS,
  details: {}
} as FinancesState

const financialSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<{ id: string }>) => {
      const details = state.detailsList.find(item => item.fundId === action.payload.id)
      if (details) {
        state.details = details
      }
    },
  }
})

export const portfolioSelector = (state: RootState) => state.financeSlice.portfolio
export const fundsSelector = (state: RootState) => state.financeSlice.funds
export const detailsSelector = (state: RootState) => state.financeSlice.details

export const {
  setDetails,
} = financialSlice.actions

export default financialSlice.reducer
