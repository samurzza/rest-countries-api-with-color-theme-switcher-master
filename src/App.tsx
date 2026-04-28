import { useState , useEffect} from 'react'
import './App.css'

function App() {


  useEffect(()=>{
    fetch("/data.json").then(
      e => e.json()).then(e => console.log(e))
  },[])

  return (
    <>

    </>
  )
}

export default App
