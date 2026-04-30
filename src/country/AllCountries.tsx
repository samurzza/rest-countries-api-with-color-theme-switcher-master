import { useEffect, useState } from 'react'
import Searsh from "./Searsh"
import "./searshStyle.css"
import "./county.css"
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
    

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

function allCountryesContent(e: Country) {
    return (
        <div className="country">
            <img style={{width: `100%` ,height:`10dvw`}} src={e.flags.svg} alt="" />
            <h2>{e.name}</h2>
            <p>Population: {e.population}</p>
            <p>Region: {e.region}</p>
            {e.capital && <p>Capital: {e.capital}</p>}
        </div>
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