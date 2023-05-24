import { Box, Heading, HStack, Icon, VStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { Details } from '../../../types/FinancesTypes'

type Props = {
  data: Details
}

export const BoxInfoAndStats = ({ data }: Props) => {
  return (
    <Box>
      <Heading fontSize="md">Info & Stats</Heading>
      <HStack flexWrap="wrap">
        {data.info?.map((item, key) => (
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
  )
}
