import { createContext } from 'react'
import Parent from './Parent'

const data=createContext();
const data1=createContext();
function GrandParent(){
    const name='parth'
    const gender='male'
    return(
        <data.Provider value={name}>
            <data1.Provider value={gender}>

        <Parent/>
            </data1.Provider>

        </data.Provider>
    )
}

export default GrandParent
export {data,data1}