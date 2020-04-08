import React from 'react';

export const ReactionIcon = ( { name, color = '#ccc' }) => (
    <div style={{ backgroundColor : color }} className="reaction-icon">
        <ion-icon  name={ name }></ion-icon>
    </div>
);