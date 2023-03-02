// Name: get book
// Shortcut: cmd alt b

import "@johnlindquist/kit"

const response = await get('https://franknoirot.co/api/books')

const books = response.data

const book = await arg('List of books', books.map(book => ({
    name: book.title,
    description: 'by ' + book.author,
    value: book,
})))

setSelectedText(`https://www.franknoirot.co` + book.url)