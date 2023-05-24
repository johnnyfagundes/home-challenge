import { Heading, HStack, useTheme } from 'native-base'
import { Portfolio } from '../../../types/FinancesTypes'

import { Percentage } from '../../../components/Percentage'
import RewardSvg from '@assets/reward.svg'

type Props = {
  data: Portfolio
}

export const PortfolioDetails = ({ data }: Props) => {
  const { colors } = useTheme()

  return (
    <>
      <Heading mx={4} mt={4} fontSize="12px" fontWeight="300">Portfolio</Heading>

      <HStack mb={6} px={4} alignItems="auto" justifyContent="space-between">
        <HStack space={1} alignItems="auto">
          <Heading fontSize="2xl">{data?.value}</Heading>
          <Percentage number={data?.percentage} arrowSize="12px" size="16px"/>
        </HStack>
        <HStack
          space={1}
          bgColor="violet.100"
          borderRadius={4}
          p={2}
          alignItems="center"
        >
          <RewardSvg fill={colors.violet[600]}/>
          <Heading fontSize="sm" color="violet.600">Earn Rewards</Heading>
        </HStack>
      </HStack>
    </>
  )
}
