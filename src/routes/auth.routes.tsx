import { createStackNavigator } from '@react-navigation/stack'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { Login } from '../screens/Login'
import { SignUp } from '../screens/SignUp'

type AuthRoutes = {
  login: undefined
  signup: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen, Group } = createStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="login" component={Login} />
        <Screen name="signup" component={SignUp} />
      </Group>
    </Navigator>
  )
}
