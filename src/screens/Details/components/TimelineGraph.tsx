import { Box, Heading, HStack, useTheme } from 'native-base'

import LineChart from '@assets/line-chart.svg'
import { Details } from '../../../types/FinancesTypes'

type Props = {
  data: Details
}

export const TimelineGraph = ({ data }: Props) => {
  const {colors} = useTheme()
  return (
    <>
      <HStack justifyContent="space-between" mx={4} mb={6}>
        <Heading>{data?.value}</Heading>
        <Heading>{data?.year}</Heading>
      </HStack>
      <LineChart stroke={data?.negative ? colors.red[500] : colors.green[500]} strokeWidth={2}/>
      <HStack justifyContent="space-evenly" alignItems="center">
        <Heading fontSize="lg" color="gray.500" fontWeight="400">1h</Heading>
        <Box bg="violet.100" p={2} borderRadius={4}>
          <Heading fontSize="lg" color="violet.500" fontWeight="500">1d</Heading>
        </Box>
        <Heading fontSize="lg" color="gray.500" fontWeight="400">1w</Heading>
        <Heading fontSize="lg" color="gray.500" fontWeight="400">1m</Heading>
        <Heading fontSize="lg" color="gray.500" fontWeight="400">1y</Heading>
        <Heading fontSize="lg" color="gray.500" fontWeight="400">All</Heading>
      </HStack>
    </>
  )
}
