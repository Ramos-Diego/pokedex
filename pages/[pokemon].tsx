import {
  Image,
  Center,
  Text,
  Box,
  SimpleGrid,
  HStack,
  Container,
  VStack,
  Heading,
} from '@chakra-ui/core'
import { GetStaticProps, GetStaticPaths } from 'next'

const pokemon: React.FC<any> = ({ pokemon }) => {
  const data = JSON.parse(pokemon)
  return (
    <Center h={{ md: '100vh' }}>
      <Container bgColor="gray.100" borderRadius="lg" py={5}>
        <VStack alignContent="center">
          <Box>
            <Image
              maxH="300px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            />
          </Box>
          <HStack>
            <Heading as="h1" size="xl">
              {data.name}
            </Heading>
            <Text fontWeight="bold" fontSize="1.3rem" color="gray.600">
              #{data.id}
            </Text>
          </HStack>
          <Text>{data.types[0].type.name}</Text>
          <SimpleGrid columns={2} spacing={5}>
            <Text>Height: {data.height / 10}m</Text>
            <Text>Weight: {data.weight / 10}kg</Text>
          </SimpleGrid>
        </VStack>
      </Container>
    </Center>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get Gen 1 pokemons from the API
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const { results } = await res.json()

  // Get the paths we want to pre-render based on pokemon list
  const paths = results.map(({ name }: any) => ({
    params: { pokemon: name },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // If the route is like /pokemon/pikachu, then params.pokemon is pikachu
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.pokemon}`)
  const pokemon = JSON.stringify(await res.json())

  // Pass pokemon data to the page via props
  return { props: { pokemon } }
}

export default pokemon
