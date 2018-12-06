import React from 'react';
// import Router from 'next/router';

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const ONE_BOOK_QUERY = gql`
    query ONE_BOOK_QUERY {

        book (where: {
            id:"cjp905y67eo2j0a62p8qtrp3j"
        }) {
            id
            title
            description
            image
        }

    }
`;

class BookDetail extends React.Component {

  // static async getInitialProps() {
  //   // Add some delay
  //
  //   await new Promise((resolve) => {
  //     console.log(Router.pathname);
  //     setTimeout(resolve, 3000);
  //   });
  //   return {};
  // }

  render() {
    return (

        <div className={'container mt-3'}>
          <div className={'b-box b-box--bordered'}>
            <Query query={ONE_BOOK_QUERY}>
              {({data, error, loading}) => {

                if (error) return <div className={'alert alert-danger'}>Error</div>;
                if (loading) return <div>Loading...</div>;

                console.log(data);

                const {book} = data;

                return (
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
                );

              }}
            </Query>
          </div>
        </div>
    );
  }
}

export default BookDetail;
