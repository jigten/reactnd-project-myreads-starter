import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
        <SearchBooks/>
      )} />
        <Route path="/" exact render={() => (
          <BookShelf />
        )} />
      </div>
    )
  }
}

export default BooksApp
