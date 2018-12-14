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


