import { VStack } from 'native-base'
import { useRoute } from '@react-navigation/native'
import { HeaderDetails } from './components/HeaderDetails'
import { useEffect } from 'react'

import { Button } from '../../components/Button'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { detailsSelector, setDetails } from '../../features/financeSlice'
import { Container } from '../../components/Container'
import { CardInfoDetails } from './components/CardInfoDetails'
import { BoxPortfolioDetails } from './components/BoxPortfolioDetails'
import { BoxInfoAndStats } from './components/BoxInfoAndStats'
import { TimelineGraph } from './components/TimelineGraph'

type DetailsParams = {
  id: string
}

export function Details() {
  const dispatch = useAppDispatch()

  const route = useRoute()
  const params = route.params as DetailsParams
  const details = useAppSelector(detailsSelector)

  useEffect(() => {
    if (params?.id) {
      dispatch(setDetails({ id: params.id }))
    }
  }, [params?.id])

  return (
    <>
      {details &&
        <Container>
          <HeaderDetails title={details.title} code={details.code}/>
          <TimelineGraph data={details} />
          <VStack mx={4} mt={6} space={6}>
            <BoxInfoAndStats data={details} />
            <BoxPortfolioDetails data={details} />
            <CardInfoDetails />
            <Button title="Buy"/>
          </VStack>
        </Container>
      }
    </>
  )
}
