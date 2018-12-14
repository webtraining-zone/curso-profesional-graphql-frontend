import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {ALL_BOOKS_QUERY} from '../../queries/booksQueries';

const DELETE_BOOK_MUTATION = gql`
    mutation DELETE_BOOK_MUTATION($id: ID!) {
        deleteBook(id: $id) {
            id
        }
    }

`;

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
              <button className={'btn btn-danger'} onClick={() => {
                if (confirm('Are you sure you want to delete this item?')) {
                  deleteBook();
                }
              }}>
                {this.props.children}
              </button>
          )}
        </Mutation>
    );
  }
}

export default DeleteBook;
