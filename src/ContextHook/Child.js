import { useContext } from 'react'
import {data,data1} from './GrandParent'
function Child(){
    const name1=useContext(data);
    const gender1=useContext(data1);
    return(
        <>
        <div>My Name is {name1}</div>
        <div>My Gender is {gender1}</div>
        </>
    )
}

export default Child