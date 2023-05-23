import { Input as NativeBaseInput, IInputProps, FormControl, Text } from 'native-base'

type Props = IInputProps & {
  title?: string
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, title = '', ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        bg="#F4F4F4"
        h="48px"
        px={4}
        borderWidth={0}
        fontSize="14px"
        fontFamily="body"
        placeholderTextColor="#CFCFCF"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        _focus={{
          bgColor: '#F4F4F4',
          borderWidth: 1,
          borderColor: '#770FDF',
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
