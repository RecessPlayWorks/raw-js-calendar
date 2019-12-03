import React from 'react'
// import moment from 'moment'
import styled from "styled-components"


const Day = styled.div`
    background: transparent;
    // border: 1px solid #a5b9a5;
    border-bottom-width: 0;
    border-right-width: 0;
    font-weight: 100;
    color: #fff;
    padding: 2px;
    background: rgba(255, 255, 255, 0.1);
    margin: 1px;
    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }
    p {
        margin: auto;
    }
`

// takes in month. Based on Month, layout can be determined...4rows, 5rows, 6rows


const DaysGrid = ({day}) => {   
    return (
        <Day>
            <p>{day}</p>
        </Day>
    )

}

export default DaysGrid;