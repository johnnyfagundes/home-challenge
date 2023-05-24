import { Box, Heading, HStack, Text, VStack } from 'native-base'

import BusinessStatisticsSvg from '@assets/business-statistics.svg'

export const CardTip = () => {
  return (
    <HStack mt={6} mx={4} minH="105px" bgColor="violet.600" p={2} borderRadius={8}>
      <VStack flex={1} justifyContent="space-between" p={2}>
        <Heading color="white" fontSize="md">Learn more about carbon credits</Heading>
        <Text color="white">Check out our top tip!</Text>
      </VStack>
      <Box flex={1} alignItems="flex-end">
        <BusinessStatisticsSvg/>
      </Box>
    </HStack>
  )
}
