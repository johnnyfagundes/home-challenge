import { ScrollView, Text } from 'native-base'
import { Header } from '../../components/Header'

export function Portfolio() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}>
      <Header />
      <Text>Portfolio</Text>

    </ScrollView>
  )
}
