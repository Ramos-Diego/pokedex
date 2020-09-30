import { Image, Text, SimpleGrid, Grid, Square } from '@chakra-ui/core'
import Link from 'next/link'

const PokeCard: React.FC<PokemonResults> = ({ results }) => {
  return (
    <SimpleGrid minChildWidth="140px" spacing={5}>
      {results.map((pokemon, idx) => {
        return (
          <Grid
            key={idx}
            borderRadius="md"
            justifyContent="center"
            alignContent="center"
            justifyItems="center"
            bgColor="white"
            py={9}
          >
            <Link href="/[pokemon]" as={`/${pokemon.name}`}>
              <a>
                <Square size="90px">
                  <Image
                    maxH="90px"
                    // Todo: Find a solution that doesn't depend on index
                    src={`/img/${idx + 1}.svg`}
                  ></Image>
                </Square>
                <Text fontSize="1.4rem" fontWeight="bold" textAlign="center">
                  {pokemon.name}
                </Text>
              </a>
            </Link>
          </Grid>
        )
      })}
    </SimpleGrid>
  )
}

export default PokeCard
