import { createContext } from "react"

const Context=createContext();

export const userContext = ({children})=>{
    const user = {name: "Mithik", phn:"8220391947"}
    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}

export default Context;