import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        <Route path="/" exact component={BookShelf} />
      </div>
    )
  }
}

export default BooksApp
