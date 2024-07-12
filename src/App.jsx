import React, { useState } from 'react'
import "./App.css"
import Result from './result'

const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {
 const [terms, setTerms]=useState("")
 

 const handleChangre = (e) => {
  setTerms(e.target.value)
 }

  return (
    <div className='container'>
      <div className='head'>
        <label htmlFor='terms'>
          Guess the number between 1 to 10 
        </label>
      </div>
      <input
       id='terms'
       type='text'
       name='terms'
       onChange={handleChangre}
       />
       <Result secretNum={secretNum} terms={terms} />
    </div>
  )
}
export default App;