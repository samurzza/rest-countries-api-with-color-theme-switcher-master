// import {useState} from "react"
import { useContext } from "react";
import { searshContext } from "../context/searshContext";
import SearchIcon from '@mui/icons-material/Search';



export default function SearshCountyes(){

      const { search, setSearch } = useContext(searshContext);





    return(
        <>
        <div>
            <SearchIcon  style={{transform: `translate(45px, 5px)`, color:`#a8a8a8`}} />
        <input className="searchInput" type="search" value={search} placeholder="country name" onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
            
        <div style={{width:`50px` , backgroundColor:`red`}}>a</div>
        </>
    )
}
