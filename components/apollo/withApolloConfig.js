import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import CONFIG from './../../config/api';

const createApolloClient = ({headers}) => {
  return new ApolloClient({
    uri: CONFIG.serverURL,
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
