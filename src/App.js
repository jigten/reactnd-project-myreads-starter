import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
        <SearchBooks/>
      )} />
        <Route path="/" exact render={() => (
          <BookShelf
            books={this.props.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
