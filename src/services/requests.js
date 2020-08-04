import mockBooksDetails from '../mocks/booksDetails.json'

const requests = () => {
  const get = (bookId) => mockBooksDetails.find(book => book.id === bookId)

  return { get }
}

export default requests
