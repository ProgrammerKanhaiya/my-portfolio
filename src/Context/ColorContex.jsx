import React from 'react'

export const  ColorContext = React.createContext()


const UserContextProvider = ({children}) => {
    const [color, setColor] = React.useState('dark')
    return(
        <ColorContext.Provider value={{color, setColor}}>
        {children}
        </ColorContext.Provider>
    )
}

export default UserContextProvider