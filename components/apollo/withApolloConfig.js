import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import CONFIG from './../../config/api';

const createApolloClient = ({headers}) => {
  return new ApolloClient({
    uri: CONFIG.serverURL,
    // This is a sort of middleware, than runs for every single request
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
};

export default withApollo(createApolloClient);
