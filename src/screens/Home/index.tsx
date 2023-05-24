import { Divider } from 'native-base'

import { useAppSelector } from '../../app/hooks'
import { fundsSelector, portfolioSelector } from '../../features/financeSlice'
import { HomeHeader } from './components/HomeHeader'
import { PortfolioDetails } from './components/PortfolioDetails'
import { FundsCarousel } from './components/FundsCarousel'
import { CardTip } from './components/CardTip'
import { CardInfo } from './components/CardInfo'
import { Container } from '../../components/Container'


export function Home() {
  const funds = useAppSelector(fundsSelector)
  const portfolio = useAppSelector(portfolioSelector)

  return (
    <Container>
      <HomeHeader title={portfolio?.account} />
      <PortfolioDetails data={portfolio} />
      <Divider bg="gray.100" mb={4} />
      <FundsCarousel data={funds} />
      <CardTip />
      <CardInfo />
    </Container>
  )
}
