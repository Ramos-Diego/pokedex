type IndexProps = {
  children: React.ReactNode
  // pokemons is stringified at build time on GetStaticProps
  pokemons: string
}

type PokemonResults = {
  results: [{
    name: string
    url: string
  }]
}