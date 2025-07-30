import { useState } from 'react'
import './App.css'

import Input from './input';

import data from './data/data.json' with { type: 'json' }


function App() {
  const [ show, setShow ] = useState(true);
  const [ firstLetter, setFirstLetter ] = useState('');
  const [ birthMonth, setBirthMonth ] = useState('');
  const [ starSign, setStarSign ] = useState('');
  const [ birthDate, setBirthDate ] = useState('');

  const isFirstLetterVowel = (word)=>{
    if(!word) return false;
    return ['A','E','I','O','U'].includes(word[0]);
  }

  const toggleShow = ()=>{
    setShow((state)=>{
      return !state;
    });
  }

  return (
    <>
      <div className={`title${show ? '' : ' small'}`}>
        Find Your Fantasy Book
        <div className={`inputs${show ? ' visible' : ' hidden'}`}>
          <button onClick={toggleShow}>
            {show ? 'REVEAL' : 'SHOW OPTIONS'}
          </button>
          <Input
            label='First Letter of First Name'
            value={firstLetter}
            setValue={setFirstLetter}
            data={Object.keys(data.firstLetter)}
          />
          <Input
            label='Birth Date'
            value={birthDate}
            setValue={setBirthDate}
            data={Object.keys(data.birthDate)}
          />
          <Input
            label='Birth Month'
            value={birthMonth}
            setValue={setBirthMonth}
            data={Object.keys(data.birthMonth)}
          />
          <Input
            label='Star Sign'
            value={starSign}
            setValue={setStarSign}
            data={Object.keys(data.starSign)}
          />
        </div>
      </div>
      <div className={`result${show ? ' hidden' : ' visible'}`}>
        <h1>
          A{isFirstLetterVowel(data.firstLetter[firstLetter]) ? 'n' : ''} {data.firstLetter[firstLetter]} Of {data.birthMonth[birthMonth]} And {data.starSign[starSign]}
        </h1>
        <em>
          A{isFirstLetterVowel(data.birthDate[birthDate]) ? 'n' : ''} {data.birthDate[birthDate]} Story
        </em>
      </div>
    </>
  )
}

export default App
