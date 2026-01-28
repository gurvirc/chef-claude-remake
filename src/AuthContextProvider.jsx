import React from 'react'
export const authContext = React.createContext()

export default function AuthContextProvider({children}){

    const [ name, setName ] = React.useState("")



    return(
        <authContext.Provider value={{name, setName}}>
            {children}
        </authContext.Provider>
    )
}