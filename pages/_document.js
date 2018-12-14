import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
        <html>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css'/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
                crossOrigin="anonymous"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
        </html>
    );
  }
}
