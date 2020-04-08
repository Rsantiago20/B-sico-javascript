import React from 'react';
import { NavigationIcon } from './Navigation-icon';
import { ReactionIcon } from './Reactions-icon';

export const Reactions = () => (
    <div className="reactions">
        <ReactionIcon color="#999" name="close" />
        <ReactionIcon color="#C800AA" name="heart" />
    </div>
);