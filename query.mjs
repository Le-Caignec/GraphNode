import pkg from '@apollo/client'
import fetch from 'cross-fetch'
const { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } = pkg

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/subgraphs/name/ERC721',
    fetch,
  }),
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query GetToken {
        tokens(first: 5) {
          id
          currentOwner
        }
      }
    `,
  })
  .then((result) => result.data.tokens.forEach(element => {
    console.log(element)
  }));
