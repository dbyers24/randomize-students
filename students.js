'use strict';

var students = [ 'Andrew', 'Seth', 'Dan', 'Adrian', 'Joel', 'Kat', 'Joy', 'Andres', 'Catherine', 'Birdie', 'Matt Iwicki', 'Matthew LeBlanc', 'Jeff Martinez', 'Jeff Mullen', 'Jeff Kusowski', 'Dustin', 'William', 'Kerry', 'Ariel', 'Robert', 'Clara', 'Nick Carignan', 'Nicholas Gibson' ];

'use strict'

var fs = require('fs')
var _ = require('lodash')

let addStudentButton = document.getElementById('add-student-button')
let submitButton = document.getElementById('submit-button')
let numberGroupsInput = document.getElementById('number-groups-input')
let addStudentInput = document.getElementById('add-student-input')
let sizeGroupsInput = document.getElementById('size-groups-input')
let output = document.getElementById('output-box')

console.log(fs)

let handleAddStudent = e => {
  console.log('HIT handleAddStudent: ', addStudentInput.value)

  fs.write('students.txt', addStudentInput.value, () => {
    console.log('damn son, that shit worked.')
  })
  output.value += addStudentInput.value
  addStudentInput.value = null
}

let handleSubmit = e => {
  event.preventDefault()
  console.log(
    'HIT handleSubmit: ',
    '# grps: ',
    numberGroupsInput.value,
    'grp size: ',
    sizeGroupsInput.value
  )
}
addStudentButton.addEventListener('click', handleAddStudent)
submitButton.addEventListener('click', handleSubmit)
