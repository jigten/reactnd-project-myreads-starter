import React from 'react'
import './App.css'

class Book extends React.Component {
  handleChange = (book, event) => {
    const value = event.target.value
    console.log(value)
    if(value === 'read') {
      this.props.onMoveToRead(book)
    } else if (value === 'wantToRead') {
      this.props.onMoveToWantToRead(book)
    } else if (value === 'currentlyReading') {
      this.props.onMoveToCurrentlyReading(book)
    } else {
      this.props.onMoveToNone(book)
    }
  }

  render() {
    const { books } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={this.handleChange.bind(this, book)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
          ))}
        </ol>
      )
    }
  }

export default Book
