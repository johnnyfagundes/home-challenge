export interface Fund {
  id: string
  title: string
  value: string
  percentage: string
  negative: boolean
}

export interface Details {
  fundId: string
  title: string,
  code: string,
  year: number,
  value: string,
  negative: boolean
  info: Info[],
  credits: {
    total: string,
    price: string,
    percentage: string
  }
}

export interface Info {
  key: string
  value: string
}

export interface Portfolio {
  value: string
  percentage: number
  account: string
}
