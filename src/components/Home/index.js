import React from 'react';
import { Profile } from './Profile';
import { ViewCats } from './ViewCats';
import { AboutCat } from './AboutCat';
import { ProfileContext, ProfileContextStore } from '../../Contexts/ProfileContext';
import { AboutContext, AboutContextStore } from '../../Contexts/AboutContext';


export const Home = () => {

    return (

        <div className="home-page">
            <AboutContextStore>
            <ProfileContextStore>
                <Profile />
                <ViewCats />
                <AboutCat />
            </ProfileContextStore>
            </AboutContextStore>
        </div>
    )
}