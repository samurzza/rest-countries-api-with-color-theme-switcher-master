import { useEffect, useState } from 'react'
import Searsh from "./Searsh"
import "./searshStyle.css"
import "./county.css"
import {Link} from "react-router-dom"
import {useContext} from "react"
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
    // const [countrye, setCountry] = useState<string>()
    
    
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    function allCountryesContent(e: Country) {

        return (
            <Link to={`/${e.alpha3Code}`}>
                <div className="country" onClick={()=>{
                    console.log(e.alpha3Code)
                }}>
                    <img style={{width: `15dvw` ,height:`10dvw` , borderRadius:`15px 15px 0 0`}} src={e.flags.svg} alt="" />
                    <h2>{e.name}</h2>
                    <p>Population: {e.population}</p>
                    <p>Region: {e.region}</p>
                    {e.capital && <p>Capital: {e.capital}</p>}
                </div>
            </Link>
    )
}

    return( 
        <>
            <div className="searsh">
                <Searsh/>
            </div>

            <div className="atharCountryes">
                {countries.map((country) => (
                    <div key={country.alpha3Code}>
                        {allCountryesContent(country)}
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllCountries