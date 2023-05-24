import { Box, Heading, HStack, Icon, ScrollView, Text, useTheme, VStack } from 'native-base'
import { useRoute } from '@react-navigation/native'
import { HeaderDetails } from './components/HeaderDetails'
import { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'

import LineChart from '@assets/line-chart.svg'
import { Button } from '../../components/Button'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { detailsSelector, setDetails } from '../../features/financeSlice'

type DetailsParams = {
  id: string
}

export function Details() {
  const dispatch = useAppDispatch()
  const {colors} = useTheme()
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
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          showsVerticalScrollIndicator={false}>
          <HeaderDetails title={details.title} code={details.code}/>

          <HStack justifyContent="space-between" mx={4} mb={6}>
            <Heading>{details.value}</Heading>
            <Heading>{details.year}</Heading>
          </HStack>

          <LineChart stroke={colors.red[500]} strokeWidth={2}/>

          <VStack mx={4} mt={6} space={6}>

            <HStack justifyContent="space-evenly" alignItems="center">
              <Heading fontSize="lg" color="gray.500" fontWeight="400">1h</Heading>
              <Box bg="violet.100" p={2} borderRadius={4}>
                <Heading fontSize="lg" color="violet.500" fontWeight="500">1d</Heading>
              </Box>
              <Heading fontSize="lg" color="gray.500" fontWeight="400">1w</Heading>
              <Heading fontSize="lg" color="gray.500" fontWeight="400">1m</Heading>
              <Heading fontSize="lg" color="gray.500" fontWeight="400">1y</Heading>
              <Heading fontSize="lg" color="gray.500" fontWeight="400">All</Heading>
            </HStack>

            <Box>
              <Heading fontSize="md">Info & Stats</Heading>
              <HStack flexWrap="wrap">
                {details.info?.map((item, key) => (
                    <VStack pt={4} w="1/2" key={key}>
                      <HStack alignItems="baseline" space={1}>
                        <Heading fontSize="md" fontWeight="400" color="gray.400">{item.key}</Heading>
                        <Icon as={Ionicons} name="information-circle-outline" size={4} color="gray.400"/>
                      </HStack>
                      <Heading fontSize="md" fontWeight="400">{item.value
                      }</Heading>
                    </VStack>
                  )
                )}
              </HStack>
            </Box>

            <Box>
              <Heading fontSize="md">Your Portfolio</Heading>
              <HStack mt={4} justifyContent="space-between">
                <Heading fontSize="lg">{details.credits?.total}</Heading>
                <Heading fontSize="lg">{details.credits?.price}</Heading>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontSize="md" color="green.500">8.41%</Text>
                <Text fontSize="md" color="gray.500">Last purchase 28d ago</Text>
              </HStack>
              <HStack space={2} my={4}>
                <Button title="Sell" flex={1} variant="outline" />
                <Button title="Retire credits" flex={1} bg="green.400" />
              </HStack>
              <Text color="gray.500">You’ve previously retired 28 credits of this asset</Text>
            </Box>

            <HStack p={2} bg="gray.100" borderRadius={4}>
              <Text color="gray.500:alpha.70">Please note that prices are for reference only and may vary at the time of
                excecuting a buy or sell order.{'\n'}
                The information provided is not investment advice, and should not be used as a recommendation to buy or
                sell assets.</Text>
            </HStack>

            <Button title="Buy"/>

          </VStack>


        </ScrollView>
      }
    </>
  )
}
