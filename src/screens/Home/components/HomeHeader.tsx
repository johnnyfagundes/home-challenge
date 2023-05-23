import { Box, Center, Divider, Heading, HStack, useTheme } from 'native-base'

import ProfileSvg from '@assets/profile.svg'
import BellSvg from '@assets/bell.svg'
import RewardSvg from '@assets/reward.svg'
import ArrowIncreaseSvg from '@assets/arrow-increase.svg'

type Props = {
  title: string
}

export function HomeHeader({ title }: Props) {
  const { colors } = useTheme()

  return (
    <>
      <HStack pt={16} pb={2} px={4} alignItems="center">
        <Box w={10}>
          <Center height="32px" w="32px" borderRadius="16px" bg="gray.100">
            <ProfileSvg />
          </Center>
        </Box>
        <HStack flex={1} alignItems="center" space={1} justifyContent="center">
          <Heading fontSize="sm">{title}</Heading>
        </HStack>
        <Box w={10} alignItems="flex-end">
          <Center height="32px" w="32px" borderRadius="16px">
            <BellSvg />
          </Center>
        </Box>
      </HStack>

      <Heading mx={4} mt={4} fontSize="12px" fontWeight="300">Portfolio</Heading>

      <HStack mb={6} px={4} alignItems="auto" justifyContent="space-between">
        <HStack space={1} alignItems="auto">
          <Heading fontSize="2xl">$1,245.23</Heading>
          <HStack alignItems="center" space={1}>
            <ArrowIncreaseSvg width="14px" height="14px" />
            <Heading fontWeight="400" fontSize="lg" color="green.400">31.82%</Heading>
          </HStack>
        </HStack>
        <HStack
          space={1}
          bgColor="violet.100"
          borderRadius={4}
          p={2}
          alignItems="center"
        >
          <RewardSvg fill={colors.violet[600]} />
          <Heading fontSize="sm" color="violet.600">Earn Rewards</Heading>
        </HStack>
      </HStack>
      <Divider bg="#F4F4F4" mb={4} />
    </>
  )
}
