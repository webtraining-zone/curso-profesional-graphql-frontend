import React from 'react';
import {Mutation} from 'react-apollo';
import {ALL_BOOKS_QUERY, DELETE_BOOK_MUTATION} from '../../queries/booksQueries';

class DeleteBook extends React.Component {

  updateCache = (cache, payload) => {
    const data = cache.readQuery({query: ALL_BOOKS_QUERY});

    console.log(data);

    // Remove the "deleted" book
    data.books = data.books.filter(book => book.id !== payload.data.deleteBook.id);

    cache.writeQuery({query: ALL_BOOKS_QUERY, data});
  };

  render() {
    return (
        <Mutation mutation={DELETE_BOOK_MUTATION} variables={{id: this.props.id}}
                  update={this.updateCache}>
          {(deleteBook, {error, loading}) => (
              <div className={'b-button-container'}>
                <button className={'btn btn-danger'} onClick={() => {
                  if (confirm('Are you sure you want to delete this item?')) {
                    deleteBook();
                  }
                }}>
                  {this.props.children}
                </button>
              </div>
          )}
        </Mutation>
    );
  }
}

export default DeleteBook;
