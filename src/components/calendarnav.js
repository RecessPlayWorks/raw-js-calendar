import React from "react"

import calNavStyles from './calendarnav.module.scss';

const CalNav = ({decMonth, incMonth, currentMonth}) => {
        return (
        <nav className={calNavStyles.nav}>
            <button onClick={decMonth}>&#x3c;</button>
            <h1>{currentMonth}</h1>
            <button onClick={incMonth}>&#x3e;</button>
        </nav>
    )
}

export default CalNav;