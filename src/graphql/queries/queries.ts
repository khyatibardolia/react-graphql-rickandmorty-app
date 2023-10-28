import {gql} from "@apollo/client";

const getAllCharacters = gql`{
    characters {
        results {
            id
            name
            image
            status
            species
            location {
                name
            }
        }
    }
}`

export {getAllCharacters}