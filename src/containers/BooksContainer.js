import React from 'react'
import BookList from '../components/BookList'
import BookShelf from '../components/BookShelf'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class BooksContainer extends React.Component {
  render() {
    return(
      <div>
        <Route path="/books/reading-list" render={routerProps => <BookList {...routerProps} books={this.props.books}/>}/>
        <Route path="/books/bookshelf" render={routerProps => <BookShelf {...routerProps} books={this.props.books}/>}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BooksContainer)
