import { Box, Center, Checkbox, Heading, HStack, Pressable, Text, useToast } from 'native-base'
import { Header } from '../../components/Header'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from './validators'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes'
import { useEffect } from 'react'
import { addUser, reset, signUpStatusSelector, Status } from '../../features/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Container } from '../../components/Container'

export type SignUpProps = {
  firstName: string
  lastName: string
  email: string
  password: string
  isChecked: boolean
}

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const toast = useToast()
  const dispatch = useAppDispatch()
  const signUpStatus = useAppSelector(signUpStatusSelector)
  const {
    control,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm<SignUpProps>({
    resolver: yupResolver(signupSchema)
  })

  useEffect(() => {
    if (signUpStatus == Status.failed) {
      toast.show({
        title: `Error`,
        description: 'User already registered',
        placement: 'top',
        duration: 3000,
        bgColor: 'red.500',
      });
    }
    if (signUpStatus == Status.succeeded) {
      toast.show({
        title: `Success`,
        description: 'User registered',
        placement: 'top',
        duration: 3000,
        bgColor: 'green.500',
      });
      navigation.goBack()
    }
  }, [signUpStatus])

  function onSubmit({ email, password, firstName, lastName }: SignUpProps) {
    dispatch(addUser({
      email,
      password,
      firstName,
      lastName
    }))
    dispatch(reset())
  }

  function handleNavigateToLogin() {
    navigation.navigate('login')
  }

  return (
    <Container>
      <Header/>
      <Center mb="34px">
        <Heading fontSize="18">Create your account</Heading>
      </Center>

      <Box mx="20px">
        <Text color="#A0A0A0" fontSize="11px" mb="5px">First Name</Text>
        <Controller
          control={control}
          name="firstName"
          render={({field: {onChange, value}}) => (
            <Input
              placeholder={'First Name'}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.firstName?.message}
            />
          )}
        />

        <Text color="#A0A0A0" fontSize="11px" mb="5px" mt={5}>Last Name</Text>
        <Controller
          control={control}
          name="lastName"
          render={({field: {onChange, value}}) => (
            <Input
              placeholder={'lastName'}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.lastName?.message}
            />
          )}
        />

        <Text color="#A0A0A0" fontSize="11px" mb="5px" mt={5}>E-mail</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <Input
              placeholder={'E-mail'}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Text color="#A0A0A0" fontSize="11px" mb="5px" mt={5}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <Input
              placeholder={'Minimum 8 characters'}
              autoCapitalize="none"
              onChangeText={onChange}
              type="password"
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <HStack mt={5} space={2}>
          <Controller
            control={control}
            name="isChecked"
            render={({field: {onChange, value}}) => (
              <Checkbox
                value="test"
                accessibilityLabel="accept terms"
                onChange={onChange}
                isChecked={value ?? false}
                _checked={{bgColor: 'violet.700', borderColor: 'violet.700'}}
              />
            )}
          />
          <Text color="gray.400" fontSize="12px" flexShrink={1}>I am over 18 years of age and I have read and agree to
            the <Text fontWeight="400" color="black">Terms of Service</Text> and <Text fontWeight="400" color="black">Privacy
              policy</Text>.</Text>
        </HStack>

        <Button title="Create account" mt={7} isDisabled={!isValid} onPress={handleSubmit(onSubmit)}/>

        <HStack justifyContent="center" alignContent="center" mt={3}>
          <Text color="gray.400" fontSize="12px">Already have an account? </Text>
          <Pressable onPress={handleNavigateToLogin}>
            <Text fontSize="12px" textDecorationLine="underline">Log in </Text>
          </Pressable>
          <Text color="gray.400" fontSize="12px">here</Text>
        </HStack>

      </Box>
    </Container>
  )
}
