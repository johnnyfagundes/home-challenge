import { ScrollView, Text } from 'native-base'
import { Header } from '../../components/Header'

export function Details() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}>
      <Header />
      <Text>Details</Text>

    </ScrollView>
  )
}
