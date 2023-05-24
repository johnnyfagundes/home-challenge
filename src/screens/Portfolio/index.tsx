import { Box, Heading, Text, VStack } from 'native-base'
import { LOREM_IPSUM } from '../../mock/data'
import { Container } from '../../components/Container'

export function Portfolio() {
  return (
    <Container>
      <VStack space={4} flex={1} alignItems="center" pt="96px" mx={4}>
        <Heading color="violet.700">Portfolio</Heading>
        <Box p={4} bg="violet.100">
          <Text color="violet.700">{LOREM_IPSUM}</Text>
        </Box>
      </VStack>
    </Container>
  )
}
