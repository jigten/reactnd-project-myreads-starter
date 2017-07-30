import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import { Link } from 'react-router-dom'

class BookShelf extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
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

  moveToNone = (book) => {
    const books = this.state.books.slice()
    const index = this.state.books.findIndex(b => b.id === book.id)
    books[index].shelf = 'none'
    this.setState({books: books})
    BooksAPI.update(book, 'none')
  }

  render() {
    const {books} = this.state

    let currentlyReadingBooks = books.filter((book) => book.shelf === "currentlyReading")
    let wantToReadBooks = books.filter((book) => book.shelf === "wantToRead")
    let readBooks = books.filter((book) => book.shelf === "read")

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <Book
                    books={currentlyReadingBooks}
                    onMoveToCurrentlyReading={this.moveToCurrentlyReading}
                    onMoveToRead={this.moveToRead}
                    onMoveToWantToRead={this.moveToWantToRead}
                    onMoveToNone={this.moveToNone}
                  />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <Book
                    books={wantToReadBooks}
                    onMoveToCurrentlyReading={this.moveToCurrentlyReading}
                    onMoveToRead={this.moveToRead}
                    onMoveToWantToRead={this.moveToWantToRead}
                    onMoveToNone={this.moveToNone}
                  />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <Book
                    books={readBooks}
                    onMoveToCurrentlyReading={this.moveToCurrentlyReading}
                    onMoveToRead={this.moveToRead}
                    onMoveToWantToRead={this.moveToWantToRead}
                    onMoveToNone={this.moveToNone}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link
              to={{
                pathname:'/search',
                state: { books: books }
              }}>
                Search
              </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
