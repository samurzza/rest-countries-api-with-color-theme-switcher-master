import {useState} from "react"
import { useContext } from "react";
import { searshContext } from "../context/searshContext";


export default function SearshCountyes(){

      const { search, setSearch } = useContext(searshContext);


    // const [searsh , setSearsh] = useState<string>()



    return(
        <>
        <input type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            
        <div style={{width:`50px` , backgroundColor:`red`}}>a</div>
        </>
    )
}
