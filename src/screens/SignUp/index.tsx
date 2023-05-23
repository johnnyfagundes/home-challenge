import { Box, Center, Checkbox, Heading, HStack, Pressable, ScrollView, Text } from 'native-base'
import { Header } from '../../components/Header'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from './validators'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes'

export type SignUpProps = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm<SignUpProps>({
    resolver: yupResolver(signupSchema)
  })

  function onSubmit() {

  }

  function handleNavigateToLogin() {
    navigation.navigate('login')
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}>
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
          <Checkbox value="test" accessibilityLabel="This is a dummy checkbox"
                    _checked={{bgColor: '#770FDF', borderColor: '#770FDF'}}/>
          <Text color="#A0A0A0" fontSize="12px" flexShrink={1}>I am over 18 years of age and I have read and agree to
            the <Text fontWeight="400" color="black">Terms of Service</Text> and <Text fontWeight="400" color="black">Privacy
              policy</Text>.</Text>
        </HStack>

        <Button title="Create account" mt={7} onPress={handleSubmit(onSubmit)}/>

        <HStack justifyContent="center" alignContent="center" mt={3}>
          <Text color="#A0A0A0" fontSize="12px">Already have an account? </Text>
          <Pressable onPress={handleNavigateToLogin}>
            <Text fontSize="12px" textDecorationLine="underline">Log in </Text>
          </Pressable>
          <Text color="#A0A0A0" fontSize="12px">here</Text>
        </HStack>

      </Box>
    </ScrollView>
  )
}
