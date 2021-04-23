import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class ReadingSessionEditForm extends React.Component {
  state = {
    title: this.props.readingSession ? this.props.readingSession.title : '',
    date: this.props.date,
    duration: this.props.readingSession ? this.props.readingSession.duration : ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const readingSession = {
      title: this.state.title,
      date: this.state.date,
      duration: this.state.duration,
      book_id: this.props.readingSession.book_id,
    }

    this.props.updateReadingSession(readingSession, this.props.readingSession.id)
    this.props.history.push(`/books/${readingSession.book_id}/reading-sessions/${this.props.readingSession.id}`)
  }

  renderContent = () => {
    if (this.props.readingSession) {
      return (
        <>
          <p>Duration: {this.state.duration}</p>
          <p>Date: {this.state.date}</p>
          <form onSubmit={this.handleSubmit}>
            Title: <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/><br/><br/>
            <input type="submit" value="update reading session" />
          </form>
        </>
      )
    } else {
      return <Redirect to="/"/>
    }
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(ReadingSessionEditForm)
