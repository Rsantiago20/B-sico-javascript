import React, { createContext, useEffect, useState } from 'react'

const initialState = false

export const ProfileContext = createContext(initialState)

export const ProfileContextStore = ({children}) => {

    const [ profilePanel, setProfilePanel ] = useState(false)

    useEffect ( () => {

        const handlerResize = () => {
            const showState = window.innerWidth > 768
        setProfilePanel(showState)
        }

        window.addEventListener('resize', handlerResize)
        console.log('render here')
        handlerResize()

        return() => window.addEventListener('resize', handlerResize)

    }, [])

    return (
    <ProfileContext.Provider value={{ profilePanel, setProfilePanel }} >
        { children }
    </ProfileContext.Provider>
    )

}