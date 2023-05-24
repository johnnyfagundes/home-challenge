import { Heading, HStack } from 'native-base'

export const CardInfo = () => {
  return (
    <HStack mt={6} mx={4} justifyContent="space-between">
      <HStack h="215px" w="48%" bgColor="gray.100" p={4} borderRadius={8}>
        <Heading fontSize="sm">Why should you invest here?</Heading>
      </HStack>
      <HStack h="215px" w="48%" bgColor="gray.100" p={2} borderRadius={8}>

      </HStack>
    </HStack>
  )
}
