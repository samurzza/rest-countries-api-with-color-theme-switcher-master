import { useState } from 'react'
import './App.css'
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded'
import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';
import { Route , Routes  } from 'react-router-dom';
import AllCountries from "./country/AllCountries"

function App() {

const [mode , serMode] = useState<string>(`Dark Mood`)
const [calssModd , setClassMood] = useState<string>(`left`)

function Mood(){
  if(mode === `Dark Mood`){
  serMode(`Lite Mood`);
  setClassMood(`rigth`);
}else{
  serMode(`Dark Mood`);
  setClassMood(`left`);
}
}

return (
<div style={{width:`98dvw` , height:`98dvh` }} className="boody">
    <div className="nav" style={{backgroundColor:`hsl(0, 0%, 99%)` }}>
      <p style={{fontWeight:`800` , fontSize:`x-large`}}>Where in the world?</p>
      <p className="mood" style={{cursor:`pointer`}} onClick={Mood} > <span className={calssModd} >{mode === 'Dark Mood' ? <Brightness4TwoToneIcon /> : <Brightness4RoundedIcon /> }</span> { mode}</p>
    </div>

  <Routes>
    <Route path='/' element={<AllCountries />}/>
    <Route path='/contry' />
  </Routes>
</div>  
  )
}

export default App
