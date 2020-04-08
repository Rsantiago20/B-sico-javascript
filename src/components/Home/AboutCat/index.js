import React, { useContext } from 'react'
import { Interest } from './Components/Interests'
import { AboutContext } from '../../../Contexts/AboutContext'

const showAboutPanel = {
	display : 'block'
}

const hideAboutPanel = {
	display : 'none'
}

export const AboutCat = () => {

    const { aboutPanel } = useContext(AboutContext)

    return (
        <div style={ aboutPanel ? showAboutPanel : hideAboutPanel } className="about-cat">
            {/* aboutPanel ? 'Mostrar' : 'Ocultar' */}
            <Interest />
        </div>
    )
}
