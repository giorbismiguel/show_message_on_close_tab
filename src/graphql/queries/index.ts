import { gql } from "@apollo/client";

const GET_COMPANY = gql`
  query GetCompany($id: Int!) {
    GetCompany(id: $id) {
      name
      website
    }
  }
`;

export default GET_COMPANY;
