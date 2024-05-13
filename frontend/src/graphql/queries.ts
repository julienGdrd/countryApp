import { gql } from '@apollo/client';

export const LIST_COUNTRIES = gql`
query Countries {
    countries {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`
export  const COUNTRY = gql`
query Country($code: String!) {
  country(code: $code) {
    code
    emoji
    id
    name
    continent {
      id
      name
    }
  }
}`
export const LIST_CONTINENTS = gql`
query Continents {
  continents {
    id
    name
  }
}
`