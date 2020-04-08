import React, { useState, useEffect } from 'react';
import { NavigationIcon } from './Navigation-icon';
import { Couple } from './Couple';
import { CAT_LIST } from '../../../../data/db'

export const Navigation = () => {

    ///acá pondremos mas funciones // cat = CAT_LIST[0] no funciona tan asi
    const [ indexCat, setIndexCat ] = useState(0)
    const [ cat, setCat ] = useState({}) 
    

    const goBack = () => {
        let newIndex = indexCat == 0 ? CAT_LIST.length -1 : indexCat -1
        setIndexCat( newIndex )
    }

    const goNext = () => {
        let newIndex = indexCat == CAT_LIST.length -1 ? 0 : indexCat +1
        setIndexCat( newIndex )
    }

    useEffect( () => {
        console.log('Solo indexCat ha cambiado')
        setCat(CAT_LIST[indexCat])

        return () => { }

    }, [indexCat])

    return (
        <div className="navigation">
            <NavigationIcon onPress={ goBack } name="arrow-undo" />
            <Couple
                image={ cat.image }
                username={ cat.username }
                description={ cat.description }
            />
            <NavigationIcon onPress={ goNext } name="arrow-redo" />
        </div>
    )
}