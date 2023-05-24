import { Box, Divider, Heading, HStack, Icon, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string,
  code: string
}

export function HeaderDetails({ title, code }:  Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <>
      <HStack pb={2} px={4} alignItems="center">
        <Box w={10}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon as={Ionicons} name="arrow-back" size={6} />
          </TouchableOpacity>
        </Box>
        <VStack flex={1} alignItems="center" justifyContent="center">
          <Heading fontSize="lg">{title}</Heading>
          <Heading fontSize="sm" color="gray.500">{code}</Heading>
        </VStack>
        <Box w={10} />
      </HStack>
      <Divider bg="#F4F4F4" mb={4} />
    </>
  )
}
