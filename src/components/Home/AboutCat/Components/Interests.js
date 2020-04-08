import React from 'react'
import { InterestOne } from './InterestOne'
import { INSTERESTS } from '../../../../data/db'

export const Interest = () => {
     
    return(
        <div className="interest-container">
            <h3>Interest List</h3>
            <hr />
            <div className="interests-box">
            {
                INSTERESTS.map( (item, key) => <InterestOne key={key} name={ item.name } status={item.status} />)
            }
            </div>
        </div>
    )
}