import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      answers: [
        'Uncertain',
        'Yes',
        'No'
      ],
      inputText: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({inputText: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    const newAnswers = [...this.state.answers, this.state.inputText]
    this.setState({
      answers: newAnswers,
      inputText: ''
    })
  }
  render() {
    const li = answer => <li key={answer}>{answer}</li>
    return (
      <div className="App">
        <h1>Magic Eight Ball</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.inputText}
           />
          <button>add</button>
        </form>
        <ul>
          {this.state.answers.map(li)}
        </ul>
      </div>
    );
  }
}

export default App;
