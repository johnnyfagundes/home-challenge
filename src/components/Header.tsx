import { Box, Divider, HStack, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Header() {
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
        <HStack flex={1} alignItems="center" space={1} justifyContent="center">
          <Box h={1} w="50px" bg="#F4F4F4" />
          <Box h={1} w="50px" bg="#F4F4F4" />
          <Box h={1} w="50px" bg="#F4F4F4" />
        </HStack>
        <Box w={10} alignItems="flex-end">

        </Box>
      </HStack>
      <Divider bg="#F4F4F4" mb={4} />
  </>
  )
}
