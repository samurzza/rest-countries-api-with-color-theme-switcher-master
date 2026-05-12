import { useEffect, useState } from 'react'
import Searsh from "./Searsh"
import "./searshStyle.css"
import "./county.css"
import {Link} from "react-router-dom"
import {useContext} from "react"
import { searshContext } from "../context/searshContext.tsx"
import { SelectContext } from "../context/SelectContext";
import { MoodContext } from "../context/MoodContext.tsx"


interface Country {
  name: string
  population: number
  region: string
  capital?: string  // ? لأن مو كل دولة عندها عاصمة
  flags: {
    svg: string
    png: string
  }
  alpha3Code: string
}


function AllCountries(){
    const [countries, setCountries] = useState<Country[]>([])
    
    const [country, setCountry] = useState<string>()
    console.log(country)

    const { search } = useContext(searshContext);
    const { select } = useContext(SelectContext);
    const { mood } = useContext(MoodContext);

    console.log(mood)
    
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCountries(data))
        
    },[])


const regon = select || search
    ? countries.filter(e => e.region.toLowerCase().includes(select.toLowerCase())) || countries.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
    : countries
    
const filtered = search 
    ? regon.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
    : regon



    
    function allCountryesContent(e: Country) {
        return (
            <Link to={`/${e.alpha3Code}`}>
                <div className="country" style={{backgroundColor:mood===`Dark Mood` ? `hsl(209, 23%, 22%)`: `hsl(0, 0%, 100%)` , color:mood===`Dark Mood`?`white`:`black`}} onClick={()=>{setCountry(e.alpha3Code)}}>
                    <img className='imgg' src={e.flags.svg} alt="" />
                    <h2>{e.name}</h2>
                    <p>Population: {e.population}</p>
                    <p>Region: {e.region}</p>
                    {e.capital && <p>Capital: {e.capital}</p>}
                </div>
            </Link>
    )
}

function allCountry(countr:Country[]){
    return(
        countr.map((country:Country) => (
        <div key={country.alpha3Code}>
            {allCountryesContent(country)}
        </div>
        ))
    )
}

    return( 
        <>
            <div className="searsh" >
                <Searsh/>
            </div>

            <div className="atharCountryes">
                {allCountry(filtered)}
            </div>
        </>
    )
}

export default AllCountries