import { Heading, HStack } from 'native-base'

import ArrowIncreaseSvg from '@assets/arrow-increase.svg'
import ArrowDecreaseSvg from '@assets/arrow-decrease.svg'

type Props = {
  number: number
  negative?: boolean
  size?: string
  arrowSize?: string
}

export const Percentage = ({number, negative = false, size = '14px', arrowSize = '10px'}: Props) => {
  return (
    <HStack alignItems="center" space={1}>
      {negative ? <ArrowDecreaseSvg width={arrowSize} height={arrowSize}/> : <ArrowIncreaseSvg width={arrowSize} height={arrowSize}/>}
      <Heading fontWeight="400" fontSize={size} color={negative ? 'red.500' : 'green.400'}>{number}%</Heading>
    </HStack>
  )

}
