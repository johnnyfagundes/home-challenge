import { Details, Fund } from '../types/FinancesTypes'

export const FUNDS: Fund[] = [
  {id: '1', title: 'Wind Funnd', value: '$1032.23', percentage: '3.51%', negative: false},
  {id: '2', title: 'Solar Fund', value: '$986.61', percentage: '0.13%', negative: true},
  {id: '3', title: 'Natural Fund', value: '$1122.00', percentage: '10.88%', negative: false},
]

export const DETAILS: Details[] = [
  {
    fundId: '1',
    title: 'Wind Fund',
    code: 'WFND',
    year: 2022,
    value: '$18.23',
    info: [
      {key: 'AUM', value: '$430.88'},
      {key: 'Issue Date', value: '18/04/2022'},
      {key: 'Vintage Range', value: '2019 - 2022'},
      {key: 'TER', value: '0.015%'},
      {key: 'Price at Close', value: '$17.68'},
      {key: 'Price at Open', value: '$17.74'}
    ],
    credits: {
      total: '18 credits',
      price: '$328.14',
      percentage: '8.41%',
    }
  },
  {
    fundId: '2',
    title: 'Solar Fund',
    code: 'SLFND',
    year: 2023,
    value: '$22.22',
    info: [
      {key: 'AUM', value: '$490.88'},
      {key: 'Issue Date', value: '18/05/2023'},
      {key: 'Vintage Range', value: '2022 - 2023'},
      {key: 'TER', value: '0.20%'},
      {key: 'Price at Close', value: '$20.68'},
      {key: 'Price at Open', value: '$24.74'}
    ],
    credits: {
      total: '99 credits',
      price: '$999.14',
      percentage: '9.99%',
    }
  },
  {
    fundId: '3',
    title: 'Natural Fund',
    code: 'NTFND',
    year: 2023,
    value: '$9.23',
    info: [
      {key: 'AUM', value: '$430.88'},
      {key: 'Issue Date', value: '18/04/2022'},
      {key: 'Vintage Range', value: '2019 - 2022'},
      {key: 'TER', value: '0.015%'},
      {key: 'Price at Close', value: '$17.68'},
      {key: 'Price at Open', value: '$17.74'}
    ],
    credits: {
      total: '20 credits',
      price: '$120.14',
      percentage: '7.77%',
    }
  }
]
