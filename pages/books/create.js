import React from 'react';
import {Mutation} from 'react-apollo';
import Router from 'next/router';
import {ALL_BOOKS_QUERY, CREATE_BOOK_MUTATION} from '../../queries/booksQueries';
import Head from 'next/head';

class CreateBook extends React.Component {

  // Let's define some default values
  state = {
    title: 'This is a new book',
    description: 'This is a description',
    thumbnail: 'http://graphql-backend.webtraining.fun/images/javascript-design-patterns.jpg',
    image: 'http://graphql-backend.webtraining.fun/images/javascript-design-patterns.jpg',
  };

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  redirectToDetailBookPage = (bookId) => {
    Router.push({
      pathname: '/books/detail',
      query: {id: bookId},
    });
  };

  updateCache = (cache, payload) => {

    // Read more why we are setting this validation
    // https://github.com/apollographql/apollo-client/issues/1701#issuecomment-380213533
    // We only update the cache if THERE is cache, but if you land in this "create new book page" no cache will exist!!!
    if (cache.data.data.ROOT_QUERY) {
      // Update the cache here!!!
      // ROOT_QUERY is inside the data that is inside the cache
      // You can now update the cache here!!!!!

      const data = cache.readQuery({query: ALL_BOOKS_QUERY});

      console.log('>> updateCache() > BEFORE > ', data, ' --> Payload > ', payload);

      // Insert the "new" book into the cache
      data.books = data.books.concat([payload.data.createBook]);
      console.log('>> updateCache() > AFTER > ', data, typeof data);
      cache.writeQuery({query: ALL_BOOKS_QUERY, data});
    }

  };

  render() {
    return (
        <>
          <Head>
            <title>GraphyLib | Create Book</title>
          </Head>
          <div className={'container mt-3'}>
            <div className={'b-box b-box--bordered'}>

              <h1 className={'b-main-title'}>Create Book</h1>

              <div className="row">
                <div className="col-12 col-sm-8 col-md-6">

                  <div className="b-form">

                    <Mutation mutation={CREATE_BOOK_MUTATION} variables={this.state}
                              update={this.updateCache}>
                      {(createBook, {loading, error}) => (
                          <div>
                            {loading && <p>Loading...</p>}

                            {error && <p>Error :( Please try again</p>}

                            <form onSubmit={async (event) => {
                              event.preventDefault();
                              const response = await createBook();
                              console.log('>> Book created: ', response);
                              // this.redirectToDetailBookPage(response.data.createBook.id);
                            }}>

                              <div className="form-group">
                                <label htmlFor="name">Title* :</label>
                                <input id="title" name="title" className="form-control"
                                       type="text" required onChange={this.handleOnChange}
                                       defaultValue={this.state.title}/>
                              </div>

                              <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea id="description" name="description"
                                          className="form-control"
                                          rows="8"
                                          onChange={this.handleOnChange}
                                          defaultValue={this.state.description}/>
                              </div>

                              <button type="submit" className="btn btn-primary">Submit
                              </button>
                            </form>
                          </div>
                      )}
                    </Mutation>


                  </div>

                </div>
              </div>

            </div>
          </div>
        </>);
  }
}

export default CreateBook;
