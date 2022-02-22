
// rfce tab create and export function
import React from 'react'

function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets



//rafce tab create and export componant as arrow funcction

import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

//rce tab create and export a class componant

import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets


//rconst tab create constructor

constructor(props) {
  super(props)

  this.state = {
     first
  }
}
// console log
console.log(first)

//console log object  along with its name as a string.
console.log('first', first)