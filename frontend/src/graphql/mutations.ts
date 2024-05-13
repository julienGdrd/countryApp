import { gql } from '@apollo/client';

export const CREATE_COUNTRY = gql`
mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      id
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`