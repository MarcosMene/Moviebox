import { Container, Banner, Title, RateContainer, Rate } from './styles'
import { Ionicons } from '@expo/vector-icons'

function SearchItem({ data, navigatePage }) {
  function detailMovie() {
    if (data.realease_date === '') {
      alert("This movie doesn't have a release date yet.")
      return
    }
    navigatePage(data)
  }

  return (
    <Container activeOpacity={0.7} onPress={detailMovie}>
      {data?.poster_path ? (
        <Banner
          resizeMethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`,
          }}
        />
      ) : (
        <Banner
          resizeMethod="resize"
          source={require('../../assets/noimage.png')}
        />
      )}

      <Title>{data?.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SearchItem
