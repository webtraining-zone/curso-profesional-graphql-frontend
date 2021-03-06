import React, {Fragment} from 'react';
import Header from './Header';

class PageContainer extends React.Component {
  render() {
    return (
        <Fragment>
          <Header/>
          <main className={"b-main"}>
            {this.props.children}
          </main>
        </Fragment>
    );
  }
}

export default PageContainer;
