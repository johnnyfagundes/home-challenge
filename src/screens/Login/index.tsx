import { Center, Heading, HStack, Pressable, ScrollView, Text, VStack } from 'native-base'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './validators'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes'
import { Header } from '../../components/Header'

export type LoginProps = {
  email: string
  password: string
}

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
  })

  function onSubmit({ email, password }: LoginProps) {
    console.log(email)
    console.log(password)
  }

  function handleNavigate() {
    navigation.navigate('signup')
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}>
      <Header />
      <VStack flex={1} px="20px">
        <Center mb="34px">
          <Heading fontSize="18">Login</Heading>
        </Center>

        <Text color="#A0A0A0" fontSize="11px" mb="5px">E-mail</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
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

        <Text color="#A0A0A0" fontSize="11px" mb="5px" mt="20px">Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
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

        <Button title="Login" mt="37px"  onPress={handleSubmit(onSubmit)} />

        <HStack justifyContent="center" alignContent="center" mt={3}>
          <Text color="#A0A0A0" fontSize="12px">Don't have an account? </Text>
          <Pressable onPress={handleNavigate}>
            <Text fontSize="12px" textDecorationLine="underline">Sign up </Text>
          </Pressable>
          <Text color="#A0A0A0" fontSize="12px">here</Text>
        </HStack>
      </VStack>
    </ScrollView>
  )
}
