'use strict';

var fs = require('fs')

{/* <button class='add-student-button' type='submit'>  +  </button?
          <label># of groups
          <input id='number-groups-input' type='number' />
          </label>
          <label>Group Size: 
          <input id='size-groups-input' type='number' />
          </label>
      <button class='submit-button' type='submit'> SUBMIT </button> */}

let addStudentButton = document.getElementById('add-student-button')
let submitButton = document.getElementById('submit-button')
let numberGroupsInput = document.getElementById('number-groups-input')
let addStudentInput = document.getElementById('add-student-input')
let sizeGroupsInput = document.getElementById('size-groups-input')
let output = document.getElementById('output-box')

let handleAddStudent = (e) => {
  console.log('HIT handleAddStudent: ', addStudentInput.value)

  fs.write('students.txt', addStudentInput.value, () => {
    console.log('damn son, that shit worked.')
  })

  output.value += addStudentInput.value
  addStudentInput.value = null;
}

let handleSubmit = (e) => {
  event.preventDefault();
  console.log('HIT handleSubmit: ', '# grps: ', numberGroupsInput.value, 'grp size: ', sizeGroupsInput.value,  )  
}
addStudentButton.addEventListener('click', handleAddStudent)
submitButton.addEventListener('click', handleSubmit)