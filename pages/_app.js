import App, {Container} from 'next/app';
import '../styles/global.scss';

class LibraryApp extends App {
  render() {
    const {Component} = this.props;

    return (
        <Container>
          <h1>Page</h1>
          <Component/>
        </Container>

    );
  }
}

export default LibraryApp;
