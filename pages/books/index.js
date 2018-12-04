import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const ALL_BOOKS_QUERY = gql`
    query ALL_BOOKS_QUERY {
        books {
            id
            title
            thumbnail
        }
    }
`;

class BooksIndex extends React.Component {

  render() {
    return (
        <div className={'container mt-3'}>
          <div className={'b-box b-box--bordered'}>
            <h1>Books</h1>

            {/*Render props*/}
            <Query query={ALL_BOOKS_QUERY}>
              {({data, error, loading}) => {

                if (error) return <div className={'alert alert-danger'}>Error</div>;

                return (
                    <div className={'b-books'}>
                      {data.books.map(book => (
                              <div className={'b-book'} key={book.id}>
                                {book.title}
                              </div>
                          ),
                      )}
                    </div>
                );
              }}
            </Query>
          </div>
        </div>);
  }
}

export default BooksIndex;
