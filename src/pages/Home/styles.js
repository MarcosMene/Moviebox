import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #480101;
  flex: 1;
  padding: 4px 0;
`
export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
`

export const Input = styled.TextInput`
  background-color: rgba(219, 219, 219, 0.4);
  width: 85%;
  height: 50px;
  border-radius: 50px;
  padding: 8px 15px;
  font-size: 18px;
  color: #fff;
`

export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  padding: 20px 14px 8px 14px;
  font-size: 24px;
  font-weight: bold;
  color: #ebebeb;
`

export const BannerButton = styled.TouchableOpacity`
  width: 100%;

  object-fit: cover;
`

export const Banner = styled.Image`
  height: 150px;
  border-radius: 6px;
  margin: 0 14px;
`
export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`
