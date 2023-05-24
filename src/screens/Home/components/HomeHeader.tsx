import { Box, Center, Heading, HStack } from 'native-base'

import ProfileSvg from '@assets/profile.svg'
import BellSvg from '@assets/bell.svg'

type Props = {
  title: string
}


export function HomeHeader({title}: Props) {
  return (
    <HStack pt={16} pb={2} px={4} alignItems="center">
      <Box w={10}>
        <Center height="32px" w="32px" borderRadius="16px" bg="gray.100">
          <ProfileSvg/>
        </Center>
      </Box>
      <HStack flex={1} alignItems="center" space={1} justifyContent="center">
        <Heading fontSize="sm">Account:{title}</Heading>
      </HStack>
      <Box w={10} alignItems="flex-end">
        <Center height="32px" w="32px" borderRadius="16px">
          <BellSvg/>
        </Center>
      </Box>
    </HStack>
  )
}
