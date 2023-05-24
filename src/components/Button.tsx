import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h="52px"
      bg={variant === 'outline' ? 'transparent' : '#770FDF'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="gray.300"
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : '#8025db',
      }}
      {...rest}>
      <Text
        color={variant === 'outline' ? '#770FDF' : 'white'}
        fontSize="md"
        fontWeight="500"
      >{title}</Text>
    </NativeBaseButton>
  )
}
