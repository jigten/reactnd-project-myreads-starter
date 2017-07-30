import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends React.Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(this.state.query, 20).then((books) => {
      console.log(this.state.query)
      this.setState({books: books})
      console.log(books)
    })
  }

  moveToNone = (book) => {
    const books = this.state.books.slice()
    const index = this.state.books.findIndex(b => b.id === book.id)
    books[index].shelf = ''
    this.setState({books: books})
    BooksAPI.update(book, '')
  }

  moveToRead = (book) => {
    const books = this.state.books.slice()
    const index = this.state.books.findIndex(b => b.id === book.id)
    books[index].shelf = 'read'
    this.setState({books: books})
    BooksAPI.update(book, 'read')
  }

  moveToCurrentlyReading = (book) => {
    const books = this.state.books.slice()
    const index = this.state.books.findIndex(b => b.id === book.id)
    books[index].shelf = 'currentlyReading'
    this.setState({books: books})
    BooksAPI.update(book, 'currentlyReading')
  }

  moveToWantToRead = (book) => {
    const books = this.state.books.slice()
    const index = this.state.books.findIndex(b => b.id === book.id)
    books[index].shelf = 'wantToRead'
    this.setState({books: books})
    BooksAPI.update(book, 'wantToRead')
  }

  render() {
    const { query, books } = this.state

    return (
      <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/" className="close-search">
                Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            {books && (
              <Book
                  books={books}
                  onMoveToCurrentlyReading={this.moveToCurrentlyReading}
                  onMoveToRead={this.moveToRead}
                  onMoveToWantToRead={this.moveToWantToRead}
                />
            )}
          </div>
      </div>
    )
  }
}

export default SearchBooks
