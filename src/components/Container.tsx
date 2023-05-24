import { IScrollViewProps, ScrollView } from 'native-base'
import { Platform } from 'react-native'


export function Container({ ...rest }: IScrollViewProps) {
  return (
    <ScrollView
      {...rest}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20, paddingTop: Platform.OS === 'ios'? 56: 12 }}
      showsVerticalScrollIndicator={false}>
    </ScrollView>
  )
}
