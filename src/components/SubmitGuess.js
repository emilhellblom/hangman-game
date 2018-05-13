import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class Submit extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.makeGuess(this.state.value);
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input onChange={ e => this.handleChange(e) } value={ value } type='text' maxLength='1' pattern='[A-Za-z]'/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeGuess: x => dispatch(makeGuess(x))
  }
}

export const SubmitGuess = connect(null, mapDispatchToProps)(Submit)
