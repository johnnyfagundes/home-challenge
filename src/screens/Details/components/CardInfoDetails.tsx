import { HStack, Text } from 'native-base'

export const CardInfoDetails = () => {
  return (
    <HStack p={2} bg="gray.100" borderRadius={4}>
      <Text color="gray.500:alpha.70">Please note that prices are for reference only and may vary at the time of
        excecuting a buy or sell order.{'\n'}
        The information provided is not investment advice, and should not be used as a recommendation to buy or
        sell assets.</Text>
    </HStack>
  )
}
