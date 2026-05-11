import { useState } from 'react'
import './App.css'
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded'
import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';
import { Route , Routes  } from 'react-router-dom';
import AllCountries from "./country/AllCountries"
import OneCountry from "./country/OneCountry"
import {MoodContext} from "./context/MoodContext.tsx"
import {searshContext} from "./context/searshContext.tsx"
import {SelectContext} from "./context/SelectContext.tsx"


function App() {

  
  const [calssModd , setClassMood] = useState<string>(`left`)
  // const [ssearshContext , setsSearshContext] = useState()
  const [search, setSearch] = useState<string>("")
  const [select , setSelect ] = useState<string>("")
  const [mood , setMood] = useState<string>(`Dark Mood`)

function Mood(){
  if(mood === `Dark Mood`){
    setMood(`Lite Mood`);
    setClassMood(`rigth`);
  }else{
    setMood(`Dark Mood`);
    setClassMood(`left`);
  }
}

return (
  <div style={{width:`98dvw`, minHeight: `98.1dvh` ,paddingBottom:`15px`,backgroundColor:mood===`Dark Mood` ? `hsl(207, 26%, 17%)`: `hsl(0, 0%, 89%)`}} className="boody">
      <div className="nav" style={{backgroundColor:`hsl(0, 0%, 99%)` }}>
        <p style={{fontWeight:`800` , fontSize:`x-large`}}>Where in the world?</p>
        <p className="mood" style={{cursor:`pointer`}} onClick={Mood} > <span className={calssModd} >{mood === 'Dark Mood' ? <Brightness4TwoToneIcon /> : <Brightness4RoundedIcon /> }</span> { mood}</p>
      </div>

    <MoodContext.Provider  value={{mood , setMood }}>
      <searshContext.Provider  value={{search, setSearch }}>
        <SelectContext.Provider  value={{ select , setSelect }}>
          <Routes>
            <Route path='/' element={<AllCountries  />} />
            <Route path='/:contry' element={<OneCountry />} />
          </Routes>
        </SelectContext.Provider  >
      </searshContext.Provider  >
    </MoodContext.Provider  >
      </div>  
  )
}

export default App
