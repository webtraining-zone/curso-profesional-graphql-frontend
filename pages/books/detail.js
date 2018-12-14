import React, {Fragment} from 'react';

import Router from 'next/router';

import {Query} from 'react-apollo';
import {ONE_BOOK_QUERY} from '../../queries/booksQueries';
import Head from 'next/head';

class BookDetail extends React.Component {

  // This runs before renders and sets the "id" from the query string
  // Don't get confused "query" is the "query string" NOT a GraphQL query
  static async getInitialProps({query}) {
    return {
      id: query.id,
    };
  }

  goBack() {
    Router.back();
  }

  render() {

    const {id} = this.props;

    return (

        <div className={'container mt-3'}>
          <div className={'b-box b-box--bordered'}>
            <a href="#" onClick={this.goBack} className="btn btn-secondary mt-3 mb-3">
              <i className="fas fa-hand-point-left"></i> Go back
            </a>

            <Query query={ONE_BOOK_QUERY} variables={{id}}>
              {({data, error, loading}) => {

                if (error) return <div className={'alert alert-danger'}>Error</div>;
                if (loading) return <div>Loading...</div>;

                console.log(data);

                const {book} = data;

                return (
                    <Fragment>
                      <Head>
                        <title>GraphyLib | {book.title}</title>
                      </Head>
                      <div className={'b-book'}>
                        <div className="row">
                          <div className="col-4 col-sm-4 col-md-3">
                            <img src={book.image} alt={book.title} className={'img-fluid'}/>
                          </div>

                          <div className="col-8 col-sm-8 col-md-9">
                            <h1 className={'b-main-title'}>{book.title}</h1>
                            <div className="b-book__description">
                              {book.description}
                            </div>
                          </div>
                        </div>


                      </div>
                    </Fragment>
                );

              }}
            </Query>
          </div>
        </div>
    );
  }
}

export default BookDetail;
