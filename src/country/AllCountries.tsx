import { useEffect, useState } from 'react'
import Searsh from "./Searsh"
import "./searshStyle.css"
import "./county.css"
import {Link} from "react-router-dom"
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
type CountyContextType = {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

function AllCountries({setCountry}:CountyContextType){
    const [countries, setCountries] = useState<Country[]>([])
    
    
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    function allCountryesContent(e: Country) {

        return (
            <Link to={`/${e.alpha3Code}`}>
                <div className="country" onClick={()=>{setCountry(e.alpha3Code)}}>
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