import React, { useContext } from 'react'
import { Avatar } from './ProfileDetail/Avatar'
import { Bio } from './ProfileDetail/Bio'
import { Menu } from './ProfileDetail/Menu'
import { ProfileContext } from '../../../Contexts/ProfileContext'

export const Profile = () => {

    const showprofilePanel = {
        display : 'block'
    }

    const hideprofilePanel = {
        display : 'none'
    }

    const { profilePanel } = useContext(ProfileContext)

        return (
            <div style={ profilePanel ? showprofilePanel : hideprofilePanel } className="profile">
                {/* profilePanel ? 'Mostrar' : 'Ocultar' */}
                <Avatar />
                <Bio />
                <Menu />
            </div>
        )
}