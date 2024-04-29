import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] =useState(8);
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed] =useState(false)
  const [password, setPassword] =useState(null)

  //useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass ='';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(charAllowed) str+="!@#$%^&*-+=(){}[]`~"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length+1)

      pass += str.charAt(char)
1     
    }
    setPassword(pass)

  },[length, numberAllowed,charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()

    // we can give range also
    // passwordRef.current.setSelectionRange(0, 2);
    window.navigator.clipboard.writeText(password);
  },[password])
useEffect(()=>passwordGenerator(),[length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-white text-center my-3'> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 py-2">
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        ref={passwordRef}
        readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 pb-5">
          <input type="range" 
          min={6}
          max={100}
          value={length}
          onChange={(event)=>{setLength(event.target.value)}}
          className='cursor-pointer'
          />
          <label htmlFor="length">{`length: ${length}`}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="Number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="Characters">Characters</label>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App