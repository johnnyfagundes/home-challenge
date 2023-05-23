import { ScrollView, Text } from 'native-base'
import { Header } from '../../components/Header'

export function Trade() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}>
      <Header />
      <Text>Trade</Text>

    </ScrollView>
  )
}
