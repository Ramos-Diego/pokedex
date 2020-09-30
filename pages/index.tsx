import { Box, Container, Flex, Heading } from '@chakra-ui/core'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import PokeCard from '../components/PokeCard'
import { FaGithub } from 'react-icons/fa'

const index: React.FC<IndexProps> = ({ pokemons }) => {
  const { results }: PokemonResults = JSON.parse(pokemons)

  return (
    <Box bgColor="gray.100">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="lg" py={5}>
        <Flex justifyContent="space-between" mb={5} alignItems="center">
          <Heading as="h1" size="xl">
            POKEDEX
          </Heading>
          <a target="_blank" href="https://github.com/Ramos-Diego/pokedex">
            <FaGithub size="2rem" />
          </a>
        </Flex>
        <PokeCard results={results}></PokeCard>
      </Container>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Get Gen 1 pokemons from the API
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

  const pokemons = JSON.stringify(await data.json())

  return {
    props: {
      pokemons,
    },
  }
}

export default index
