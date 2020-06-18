import React, { useContext } from 'react'
import { Avatar } from './ProfileDetail/Avatar'
import { Bio } from './ProfileDetail/Bio'
import { Menu } from './ProfileDetail/Menu'
import { ProfileContext } from '../../../Contexts/ProfileContext'



    const showprofilePanel = {
        display : 'block'
    }

    const hideprofilePanel = {
        display : 'none'
    }
    export const Profile = ({image, nick, bio}) => {

    const { profilePanel } = useContext(ProfileContext)

        return (
            <div style={ profilePanel ? showprofilePanel : hideprofilePanel } className="profile">
                {/* profilePanel ? 'Mostrar' : 'Ocultar' */}
                <Avatar image={image} nick={nick} />
                <Bio bio={bio} />
                <Menu />
            </div>
        )
}