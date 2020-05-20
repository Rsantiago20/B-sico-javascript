import React from 'react'
import { InterestOne } from './InterestOne'
import { INSTERESTS } from '../../../../data/db'

export const Interest = () => {
     
    return(
        <div className="interest-container">
            <h3>Interest List</h3>
            <hr />
            <input type="radio" name="gender" value="Female"></input><label>Female</label>
            <input type="radio" name="gender" value="Male"></input><label>Male</label>
            <div className="interests-box">
            {
                INSTERESTS.map( (item, key) => <InterestOne key={key} name={ item.name } status={item.status} />)
            }
            </div>
        </div>
    )
}