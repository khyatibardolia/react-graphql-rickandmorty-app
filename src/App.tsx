import {useEffect, useState} from 'react'
import './App.css'
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://flyby-router-demo.herokuapp.com/',
            cache: new InMemoryCache(),
        });

        client
            .query({
                query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
            })
            .then((result) => console.log(result));
    }, []);

    return (
        <>
            Hi
        </>
    )
}

export default App
