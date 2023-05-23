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
      bg="#770FDF"
      _pressed={{
        bg: '#8025db',
      }}
      {...rest}>
      <Text color='white'>{title}</Text>
    </NativeBaseButton>
  )
}
