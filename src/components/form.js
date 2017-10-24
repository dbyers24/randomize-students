import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: 'student output will appear here',
      studentInput : '',
    }
  }
  
  handleSubmit(e) {
    console.log('Hit HandleSubmit, ', )  
  }

  handleAddStudent(e) {
    console.log('Hit handleAddStudent ', e)
    e.preventDefault()
    this.setState({
      output: this.state.studentInput,
      studentInput: '',
    })

  }

  handleInputChange(studentInput) {
    this.setState({studentInput})
    console.log(this.state.studentInput)
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
          onClick={e => this.handleAddStudent(e)} >
          {' '}
          +{' '}
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