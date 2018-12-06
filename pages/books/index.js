import React from 'react';
import Router from 'next/router';
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

  navigateToDetail = (event, book) => {
    event.preventDefault();
    Router.push(`/books/detail?id=${book.id}`);
  };

  render() {
    return (
        <div className={'container mt-3'}>
          <div className={'b-box b-box--bordered'}>
            <h1 className={'b-main-title'}>Selected Books</h1>

            {/*Render props*/}
            <Query query={ALL_BOOKS_QUERY}>
              {({data, error, loading}) => {

                if (error) return <div className={'alert alert-danger'}>Error</div>;
                if (loading) return <div>Loading...</div>;

                console.log(data);

                return (
                    <div className={'row'}>
                      {data.books.map(book => (
                              <div className={'col-6 col-sm-4 col-md-2'} key={book.id}>
                                <div className={'b-book mb-4'}>
                                  <div className={'b-book__thumbnail'}>
                                    <a onClick={(e) => this.navigateToDetail(e, book)} href="#">
                                      <img src={book.thumbnail} alt={book.title}
                                           className={'img-fluid'}/>
                                    </a>
                                  </div>
                                  {/*<h4>{book.title}</h4>*/}
                                </div>
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
