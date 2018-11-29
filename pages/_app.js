import App, {Container} from 'next/app';
import PageContainer from '../components/common/PageContainer';
import '../styles/global.scss';

class LibraryApp extends App {
  render() {
    const {Component} = this.props;

    return (
        <Container>
          <PageContainer>
            <Component/>
          </PageContainer>
        </Container>

    );
  }
}

export default LibraryApp;
