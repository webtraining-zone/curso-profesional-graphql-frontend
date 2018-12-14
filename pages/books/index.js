import React from 'react';
import Router from 'next/router';
import {Query} from 'react-apollo';
import {ALL_BOOKS_QUERY} from '../../queries/booksQueries';
import DeleteBook from '../../components/common/DeleteBook';

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

                if (loading) return <div>Loading...</div>;
                if (error) return <div className={'alert alert-danger'}>Error</div>;

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
                                  <DeleteBook id={book.id}>x</DeleteBook>
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
