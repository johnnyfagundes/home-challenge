import { Box, Heading, Text, VStack } from 'native-base'
import { LOREM_IPSUM } from '../../mock/data'
import { Container } from '../../components/Container'

export function Trade() {
  return (
    <Container>
      <VStack space={4} flex={1} alignItems="center" mx={4}>
        <Heading>Trade</Heading>
        <Box p={4} bg="gray.100">
          <Text>{LOREM_IPSUM}</Text>
        </Box>
      </VStack>
    </Container>
  )
}
