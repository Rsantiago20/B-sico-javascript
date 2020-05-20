import React, { useContext } from 'react'
import Logo from '../../../../static/logo-colors.svg'
import { TopbarIcon } from './Topbar-icon'
import { ProfileContext } from '../../../../Contexts/ProfileContext'
import { AboutContext } from '../../../../Contexts/AboutContext'

const logoStyle = {
    flex: 1,
    textAlign: 'center'
}

export const Topbar = () => {

    const { aboutPanel,setAboutPanel } = useContext(AboutContext)

    const { profilePanel, setProfilePanel } = useContext(ProfileContext)

    const profilePanelHandler = () => {
		//console.log('click!')
		setProfilePanel(!profilePanel)
    }
    
    const aboutPanelHandler = () => {
		//console.log('click!')
		setAboutPanel(!aboutPanel)
	}

    return (
        <div className="topbar">
            {/* profilePanel ? 'mostrar' : 'ocultar'*/}
            <div className="show-mobile">
            <TopbarIcon onPress={ profilePanelHandler } name="menu-sharp" />
            </div>
            <div style={ logoStyle }>
                <img width="200" src={ Logo } />
            </div>
            {/* aboutPanel ? 'mostrar' : 'ocultar'*/}
            <div className="show-mobile">
            <TopbarIcon onPress={ aboutPanelHandler } name="apps-sharp" />
            <TopbarIcon badge="6" name="notifications" />
            </div>
        </div>
    )
}
