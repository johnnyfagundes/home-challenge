import { Box, Heading, HStack, Text } from 'native-base'
import { Button } from '../../../components/Button'
import { Details } from '../../../types/FinancesTypes'
import { Percentage } from '../../../components/Percentage'

type Props = {
  data: Details
}

export const BoxPortfolioDetails = ({ data } :  Props) => {
  return (
    <Box>
      <Heading fontSize="md">Your Portfolio</Heading>
      <HStack mt={4} justifyContent="space-between">
        <Heading fontSize="lg">{data.credits?.total}</Heading>
        <Heading fontSize="lg">{data.credits?.price}</Heading>
      </HStack>
      <HStack justifyContent="space-between">
        <Percentage number={8.41} arrowSize="12px" size="16px" />
        <Text fontSize="md" color="gray.500">Last purchase 28d ago</Text>
      </HStack>
      <HStack space={2} my={4}>
        <Button title="Sell" flex={1} variant="outline" />
        <Button title="Retire credits" flex={1} bg="green.400" />
      </HStack>
      <Text color="gray.500">You’ve previously retired 28 credits of this asset</Text>
    </Box>
  )
}
