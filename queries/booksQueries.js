import gql from 'graphql-tag';

export const ALL_BOOKS_QUERY = gql`
    query ALL_BOOKS_QUERY {
        books {
            id
            title
            thumbnail
        }
    }
`;

export const ONE_BOOK_QUERY = gql`
    query ONE_BOOK_QUERY($id: ID!) {

        book (where: {
            id: $id
        }) {
            id
            title
            description
            image
        }

    }
`;

export const CREATE_BOOK_MUTATION = gql`
    mutation CREATE_BOOK_MUTATION(
    $title: String!
    $description: String
    $thumbnail: String
    $image: String
    ) {
        createBook(
            title: $title
            description: $description
            thumbnail: $thumbnail
            image: $image
        ) {
            id
            title
            description
            thumbnail
            image
        }
    }
`;

export const DELETE_BOOK_MUTATION = gql`
    mutation DELETE_BOOK_MUTATION($id: ID!) {
        deleteBook(id: $id) {
            id
        }
    }

`;
