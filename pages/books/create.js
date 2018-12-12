import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

const CREATE_BOOK_MUTATION = gql`
    mutation CREATE_BOOK_MUTATION(
    $title: String!
    $description: String
    ) {
        createBook(
            title: $title
            description: $description
        ) {
            id
            title
        }
    }
`;

class CreateBook extends React.Component {

  state = {
    title: '',
    description: '',
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

  render() {
    return (
        <div className={'container mt-3'}>
          <div className={'b-box b-box--bordered'}>

            <h1 className={'b-main-title'}>Create Book</h1>

            <div className="row">
              <div className="col-12 col-sm-8 col-md-6">

                <div className="b-form">

                  <Mutation mutation={CREATE_BOOK_MUTATION} variables={this.state}>
                    {(createBook, {loading, error}) => (
                        <form onSubmit={async (event) => {
                          event.preventDefault();
                          const response = await createBook();
                          console.log('>> Book created: ', response);
                          this.redirectToDetailBookPage(response.data.createBook.id);
                        }}>

                          <div className="form-group">
                            <label htmlFor="name">Title* :</label>
                            <input id="title" name="title" className="form-control"
                                   type="text" required onChange={this.handleOnChange}/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" className="form-control"
                                      rows="8"
                                      onChange={this.handleOnChange}></textarea>
                          </div>

                          <button type="submit" className="btn btn-primary">Submit
                          </button>
                        </form>
                    )}
                  </Mutation>


                </div>

              </div>
            </div>

          </div>
        </div>);
  }
}

export default CreateBook;
