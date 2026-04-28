import { useState , useEffect} from 'react'
import './App.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {

const [mode , serMode] = useState<string>(`Dark Mood`)

  // useEffect(()=>{
  //   fetch("/data.json").then(
  //     e => e.json()).then(e => console.log(e))
  // },[])

  return (
    <div style={{width:`98dvw` , height:`98dvh` , backgroundColor:`#dddd`}} className="boody">
        <div className="nav" style={{backgroundColor:`hsl(0, 0%, 99%)`}}>
          <p>Where in the world?</p>
          <p className="mood"> <DarkModeIcon />  { mode}</p>
        </div>
    </div>  
  )
}

export default App
