import { createStackNavigator } from '@react-navigation/stack'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { Login } from '../screens/Login'

type AuthRoutes = {
  login: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen, Group } = createStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="login" component={Login} />
      </Group>
    </Navigator>
  )
}
