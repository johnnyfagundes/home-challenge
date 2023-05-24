import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'

import HomeSvg from '@assets/home.svg'
import TradeSvg from '@assets/trade.svg'
import PortfolioSvg from '@assets/portfolio.svg'

import { useTheme } from 'native-base'
import { Home } from '../screens/Home'
import { Trade } from '../screens/Trade'
import { Details } from '../screens/Details'
import { Portfolio } from '../screens/Portfolio'

type AppRoutes = {
  Home: undefined
  Trade: undefined
  Portfolio: undefined
  details: { id: string }
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  const iconSize = sizes[6]

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarActiveTintColor: colors.violet[500],
      tabBarInactiveTintColor: colors.gray[700],
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[100],
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: 30,
        paddingTop: sizes[4]
      }
    }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({ color }) => (
            <TradeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ color }) => (
            <PortfolioSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen name="details" component={Details} options={{ tabBarButton: () => null }} />
    </Navigator>
  )
}
