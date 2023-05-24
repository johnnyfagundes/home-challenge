import { Center, Divider, Heading, HStack, Pressable, Text, useToast, VStack } from 'native-base'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './validators'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { checkUser, loginStatusSelector, reset, Status } from '../../features/userSlice'
import { useEffect } from 'react'
import { Container } from '../../components/Container'

export type LoginProps = {
  email: string
  password: string
}

export function Login() {
  const toast = useToast()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const dispatch = useAppDispatch()
  const loginStatus = useAppSelector(loginStatusSelector)
  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema)
  })

  useEffect(() => {
    if (loginStatus == Status.failed) {
      toast.show({
        title: `Login unsuccessful`,
        description: 'Invalid params or user does not exist.',
        placement: 'top',
        duration: 3000,
        bgColor: 'red.500',
      });
    }
  }, [loginStatus])

  function onSubmit({email, password}: LoginProps) {
    dispatch(checkUser({email, password}))
    dispatch(reset())
  }

  function handleNavigate() {
    navigation.navigate('signup')
  }

  return (
    <Container>
      <Divider bg="#F4F4F4" mb={4} mt="96px" />
      <VStack flex={1} px="20px">
        <Center mb="34px">
          <Heading fontSize="18">Login</Heading>
        </Center>

        <Text color="#A0A0A0" fontSize="11px" mb="5px">E-mail</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <Input
              placeholder='johndoe@gmail.com'
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Text color="#A0A0A0" fontSize="11px" mb="5px" mt="20px">Password</Text>
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <Input
              placeholder='12345678'
              autoCapitalize="none"
              onChangeText={onChange}
              type="password"
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Button title="Login" mt="37px" onPress={handleSubmit(onSubmit)}/>

        <HStack justifyContent="center" alignContent="center" mt={3}>
          <Text color="#A0A0A0" fontSize="12px">Don't have an account? </Text>
          <Pressable onPress={handleNavigate}>
            <Text fontSize="12px" textDecorationLine="underline">Sign up </Text>
          </Pressable>
          <Text color="#A0A0A0" fontSize="12px">here</Text>
        </HStack>
      </VStack>
    </Container>
  )
}
