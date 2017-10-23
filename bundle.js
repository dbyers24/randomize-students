(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

var fs = require('fs')

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

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
