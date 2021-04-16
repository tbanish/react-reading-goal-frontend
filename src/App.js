import React from 'react'
import { connect } from 'react-redux'
import { loadBooks } from './actions/books.js'
import BooksContainer from './containers/BooksContainer.js'
import ReadingSessionContainer from './containers/ReadingSessionContainer.js'
import NavBar from './components/NavBar'

class App extends React.Component {

  componentDidMount() {
    this.props.loadBooks()
  }
  render() {
    return(
      <div>
        <NavBar />
        <BooksContainer />
        <ReadingSessionContainer />
      </div>
    )
  }
}

export default connect(null, {loadBooks})(App);
