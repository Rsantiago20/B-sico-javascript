import React, { createContext, useEffect, useState } from 'react'

const initialState = false

export const ProfileContext = createContext(initialState)

export const ProfileContextStore = ({children}) => {

    const [ profilePanel, setProfilePanel ] = useState(false)

    useEffect ( () => {
        const showState = window.innerWidth > 768
        setProfilePanel(showState)
    }, [])

    return (
    <ProfileContext.Provider value={{ profilePanel, setProfilePanel }} >
        { children }
    </ProfileContext.Provider>
    )

}