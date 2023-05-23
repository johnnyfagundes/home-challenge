import { Box, FlatList, Heading, HStack, Pressable, ScrollView, Text, VStack } from 'native-base'
import { HomeHeader } from './components/HomeHeader'

import ArrowIncreaseSvg from '@assets/arrow-increase.svg'
import GraphSvg from '@assets/graph.svg'
import MiniWindSvg from '@assets/mini-wind.svg'
import BusinessStatisticsSvg from '@assets/business-statistics.svg'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '../../routes/app.routes'

const DATA = [
  {id: '1', title: 'Wind Funnd'},
  {id: '2', title: 'Solar Fund'},
  {id: '3', title: 'Natural Fund'}
]

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigateToDetails() {
    navigation.navigate('details')
  }

  const RenderItem = ({item}: any) => {
    return (
      <Pressable onPress={handleNavigateToDetails}>
        <VStack justifyContent="space-around" w="145px" h="145px" borderWidth={1} borderRadius={4} borderColor="gray.200" ml={4} p={2}>
          <MiniWindSvg />
          <Heading fontSize="sm">{item?.title}</Heading>
          <GraphSvg />
          <HStack space={1} alignItems="auto">
            <Heading fontSize="sm" fontWeight="400">$1032.23</Heading>
            <HStack alignItems="center" space={1}>
              <ArrowIncreaseSvg width="10px" height="10px"/>
              <Heading fontWeight="400" fontSize="sm" color="green.400">3.51%</Heading>
            </HStack>
          </HStack>
        </VStack>

      </Pressable>
    )
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}>
      <HomeHeader title="Account:$1,457.23"/>


      <Box>
        <Heading mx={4} mb={6} fontSize="md">Funds</Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <RenderItem item={item}/>
            )}
            numColumns={DATA.length}
          />
        </ScrollView>
      </Box>

      <HStack mt={6} mx={4} minH="105px" bgColor="violet.600" p={2} borderRadius={8}>
        <VStack flex={1} justifyContent="space-between" p={2}>
          <Heading color="white" fontSize="md">Learn more about carbon credits</Heading>
          <Text color="white">Check out our top tip!</Text>
        </VStack>
        <Box flex={1} alignItems="flex-end">
          <BusinessStatisticsSvg />
        </Box>
      </HStack>

      <HStack mt={6} mx={4} justifyContent="space-between">
        <HStack h="215px" w="48%" bgColor="gray.100" p={4} borderRadius={8}>
          <Heading fontSize="sm">Why should you invest here?</Heading>
        </HStack>
        <HStack h="215px" w="48%" bgColor="gray.100" p={2} borderRadius={8}>

        </HStack>
      </HStack>

    </ScrollView>
  )
}
