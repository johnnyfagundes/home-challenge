import { IScrollViewProps, ScrollView } from 'native-base'


export function Container({ ...rest }: IScrollViewProps) {
  return (
    <ScrollView
      {...rest}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}>
    </ScrollView>
  )
}
