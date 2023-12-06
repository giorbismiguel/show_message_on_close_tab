import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  link: new HttpLink({
    uri: "https://crm-dev.repfabric.online/graphql",
    headers: {
      "rf-userId": "1",
      "x-tenantId": "3",
      "x-tenantName": "crm",
    },
  }),
});

export default apolloClient;