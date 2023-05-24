import { Details, Fund, Portfolio } from '../types/FinancesTypes'

export const FUNDS: Fund[] = [
  {id: '1', title: 'Wind Funnd', value: '$1032.23', percentage: '3.51%', negative: false},
  {id: '2', title: 'Solar Fund', value: '$986.61', percentage: '0.13%', negative: true},
  {id: '3', title: 'Natural Fund', value: '$1122.00', percentage: '10.88%', negative: false},
]

export const PORTFOLIO: Portfolio = {
  value: '$1,245.23',
  percentage: 31.82,
  account: '$1,457.23'
}

export const DETAILS: Details[] = [
  {
    fundId: '1',
    title: 'Wind Fund',
    code: 'WFND',
    year: 2022,
    value: '$18.23',
    negative: false,
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
    negative: true,
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
    negative: false,
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

export const LOREM_IPSUM = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
