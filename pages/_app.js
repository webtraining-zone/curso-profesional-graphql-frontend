import App, {Container} from 'next/app';
import PageContainer from '../components/common/PageContainer';
import {ApolloProvider} from 'react-apollo';
import withApolloConfig from './../components/apollo/withApolloConfig';

import '../styles/global.scss';

class LibraryApp extends App {

  // Next.js Lifecycle (runs before render())
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // This will add the "query string" so we can use it in pagination or any other thing
    pageProps.query = ctx.query;
    return {pageProps};
  }

  render() {
    const {Component, apollo, pageProps} = this.props;

    return (
        <Container>
          <ApolloProvider client={apollo}>
            <PageContainer>
              <Component {...pageProps}/>
            </PageContainer>
          </ApolloProvider>
        </Container>
    );
  }
}

// This will expose this.props.apollo
export default withApolloConfig(LibraryApp);
