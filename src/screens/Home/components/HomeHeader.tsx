import { Box, Center, Heading, HStack, Icon, Pressable } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import ProfileSvg from '@assets/profile.svg'

import { useAppDispatch } from '../../../app/hooks'
import { signOut } from '../../../features/userSlice'

type Props = {
  title: string
}


export function HomeHeader({title}: Props) {
  const dispatch = useAppDispatch()

  function logout() {
    dispatch(signOut())
  }

  return (
    <HStack pb={2} px={4} alignItems="center">
      <Box w={10}>
        <Center height="32px" w="32px" borderRadius="16px" bg="gray.100">
          <ProfileSvg/>
        </Center>
      </Box>
      <HStack flex={1} alignItems="center" space={1} justifyContent="center">
        <Heading fontSize="sm">Account:{title}</Heading>
      </HStack>
      <Box w={10} alignItems="flex-end">
        <Pressable onPress={logout}>
          <Center height="32px" w="32px" borderRadius="16px">
            <Icon as={MaterialIcons} name="logout" color="gray.900" size={7} />
          </Center>
        </Pressable>
      </Box>
    </HStack>
  )
}
