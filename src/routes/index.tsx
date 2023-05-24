import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'native-base'
import { AuthRoutes } from './auth.routes'
import { useAppSelector } from '../app/hooks'
import { userLoggedSelector } from '../features/userSlice'
import { AppRoutes } from './app.routes'

export function Routes() {
  const userLogged = useAppSelector(userLoggedSelector)
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.white

  return (
    <NavigationContainer theme={theme}>
      {!userLogged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
