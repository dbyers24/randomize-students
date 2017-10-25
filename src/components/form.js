import React from 'react'
  
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: [],
      studentInput : '',
    }
  }

  componentWillMount() {
    console.log('******* ', localStorage)
    if (localStorage.people) {
      this.setState({output: [this.output, JSON.parse(localStorage.people)],
      })
    }
  }

  componentDidMount() {
    console.log('component mounted')
  
  }  

  handleSubmit(e) {
    console.log('Hit HandleSubmit, ', )  
  }

  handleAddStudent(e) {
    if (this.state.studentInput === null) 
      return null
    let output = this.state.output
    console.log('*STATE* ', output) 
    this.setState({output: [output, this.state.studentInput]})

    localStorage.setItem('people', JSON.stringify(output))

    console.log('localStorage ', localStorage)
    this.setState({studentInput: ''})  
  }

  handleInputChange(studentInput) {
    this.setState({studentInput})
  }

  render() {
    return (
      <main>
        <h3>This will be a form</h3>
        <label>
          Add Student: 
          <input id="add-student-input" 
            value={this.state.studentInput}
            onChange={e => this.handleInputChange(e.target.value)}
          />
        </label>
        <button id="add-student-button" 
          onClick={e => this.handleAddStudent(e)} > + 
        </button>

        <form>
          <label>
            # of groups
            <input id="number-groups-input" type="number" />
          </label>
          <label>
            Group Size:
            <input id="size-groups-input" type="number" />
          </label>
          <button id="submit-button" onClick={this.handleSubmit}>
            {' '}
            SUBMIT{' '}
          </button>
        </form>
        <textarea id="output-box" value={this.state.output}/>
      </main>
    )
  }
}

export default Form