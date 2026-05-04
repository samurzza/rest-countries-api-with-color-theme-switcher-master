import {useState} from "react"

export default function SearshCountyes(){

    const [searsh , setSearsh] = useState<string>()

    return(
        <>
        <input type="search" value={searsh} onChange={(e)=>{setSearsh(e.target.value)}}/>
            
        <div style={{width:`50px` , backgroundColor:`red`}}>a</div>
        </>
    )
}
