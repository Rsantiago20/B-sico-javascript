import React from 'react'

const fillstyle ={
    background: '#07ABA0',
  border: '#05636d',
  Color: '#fff'
}

export const InterestOne = ({name = '...', status = false}) => (
    <div style={ status ? fillstyle : null } className="interest-one">
        {name}
    </div>
)