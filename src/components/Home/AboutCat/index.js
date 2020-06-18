import React, { useContext, useState, useEffect } from 'react'
import { PreferencesAges } from './Components/PreferencesAges'
import { AboutContext } from '../../../Contexts/AboutContext'
import { Preferences } from './Components/preferences'
import { Interest } from './Components/Interests'
import { HTTP_CONSTANTS } from '../../../config/http-constants'
import { requestHttp } from '../../../config/http-server'

const showAboutPanel = {
	display : 'block'
}

const hideAboutPanel = {
	display : 'none'
}

export const AboutCat = ({ preferences, interest }) => {

    const [ preferencesUpdated, setPreferencesUpdated] = useState()

    const { aboutPanel } = useContext(AboutContext)

    const prefChangedHandler = (newGender) => {

        setPreferencesUpdated(prevState => ({
            ...prevState,
            gender: newGender
        }))
    }

    const prefAgesChangedHandler = (min, max) => {
        setPreferencesUpdated(prevState => ({
            ...prevState,
            age_min: min,
            age_max: max
    }))
}

    useEffect(() => {
        if (JSON.stringify(preferences) !== JSON.stringify(preferencesUpdated)){
        console.log('estas son las nuevas preferencias', preferencesUpdated)
        requestChangePreferences()
    }
    }, [preferencesUpdated])

    const requestChangePreferences = async () => {
        try{
            const endpoint = HTTP_CONSTANTS.updatePreferences
            const bodyData = {
                preferences: preferencesUpdated
            }

            const response =await requestHttp('put', endpoint, bodyData)
            console.log('response', response)
        }catch (err){
            console.log(err)
        }
    }

    return (
        <div style={ aboutPanel ? showAboutPanel : hideAboutPanel } className="about-cat">
            <Preferences onChange={ prefChangedHandler } gender={ preferences.gender } />
            <PreferencesAges notifyChange={ prefAgesChangedHandler } ageMin={ preferences.age_min } />
            <Interest interestCat={ interest } />
        </div>
    )
}

