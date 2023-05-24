import { Box, FlatList, Heading, HStack, Pressable, ScrollView, VStack } from 'native-base'
import { Fund } from '../../../types/FinancesTypes'
import { Percentage } from '../../../components/Percentage'
import RedGraphSvg from '@assets/red-graph.svg'
import GreenGraphSvg from '@assets/green-graph.svg'
import MiniWindSvg from '@assets/mini-wind.svg'
import MiniSolarSvg from '@assets/mini-solar.svg'
import MiniNaturalSvg from '@assets/mini-natural.svg'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '../../../routes/app.routes'

type Props = {
  data: Fund[]
}

type RenderItemPros = {
  item: any
  onPress: () => void
}

const RenderItem = ({ item, onPress }: RenderItemPros) => {
  return (
    <Pressable onPress={onPress}>
      <VStack justifyContent="space-around" w="145px" h="145px" borderWidth={1} borderRadius={4}
              borderColor="gray.200" ml={4} p={2}>
        {getIcon(item.id)}
        <Heading fontSize="sm">{item?.title}</Heading>
        {getChart(item.negative)}
        <HStack space={1} alignItems="auto">
          <Heading fontSize="sm" fontWeight="400">{item?.value}</Heading>
          <Percentage number={31.82} />
        </HStack>
      </VStack>
    </Pressable>
  )
}

const getChart = (negative: boolean) => {
  if (negative) return <RedGraphSvg/>
  return <GreenGraphSvg/>
}

const getIcon = (id: string) => {
  if (id === '1') return <MiniWindSvg/>
  if (id === '2') return <MiniSolarSvg/>
  return <MiniNaturalSvg/>
}

export const FundsCarousel = ({ data }: Props) => {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigateToDetails (id: string) {
    navigation.navigate('details', {id})
  }

  return (
    <Box>
      <Heading mx={4} mb={6} fontSize="md">Funds</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <RenderItem item={item} onPress={() => handleNavigateToDetails(item.id)} />
          )}
          numColumns={data.length}
          _contentContainerStyle={{ pr: 4 }}
        />
      </ScrollView>
    </Box>
  )
}
