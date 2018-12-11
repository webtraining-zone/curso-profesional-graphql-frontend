import App, {Container} from 'next/app';
import PageContainer from '../components/common/PageContainer';
import {ApolloProvider} from 'react-apollo';
import withApolloConfig from './../components/apollo/withApolloConfig';

import '../styles/global.scss';

// Loading
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

//

class LibraryApp extends App {

  // Next.js Lifecycle (runs before render())
  static async getInitialProps({Component, router, ctx}) {
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
          <div style={{marginBottom: 20}}>
            <ApolloProvider client={apollo}>
              <PageContainer>
                <Component {...pageProps}/>
              </PageContainer>
            </ApolloProvider>
          </div>
        </Container>
    );
  }
}

// This will expose this.props.apollo
export default withApolloConfig(LibraryApp);
