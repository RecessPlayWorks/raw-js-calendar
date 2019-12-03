import React, {useState} from 'react'
// import styled from "styled-components"
import Day from './days'
import moment from 'moment'
import { startDayOfMonth, monthLen, prevMonthDaysSwitch, YMDNumsToReadable} from '../utils/utils'
import CalNav from './calendarnav'
import monthCalendarStyles from './monthcalendar.module.scss';

const MonthCalendar = (month) => {
    /*test current date */
    
 
    /********************************************************/
    /* count modifies date to change the month */
    const [count, setCount] = useState(0)
    const incMonth = ( ) => (
        setCount(count + 1)
    )
        
    const decMonth = ( ) => (
        setCount(count - 1)
    )
    /********************************************************/
    var date = moment().add(count, 'month');
    const currentMonth =  date.format("MMMM")

    //get 1st day of month based on date
    const firstDayOfMonth = startDayOfMonth(moment(date));

    // console.log(firstDayOfMonth)

    //get buffer of days of prev month based on dayofweek of firstDayOfMonth var
    const bufferArrLen = prevMonthDaysSwitch(firstDayOfMonth)
    //populate array for buffer
    const prevMonthDaysBufferArr = [...new Array(bufferArrLen)]

    //get total num of days of current month
    const monthDayTotal = monthLen(moment(date));
    const monthDaysArray = [...new Array(monthDayTotal)]
    // const readable = YMDNumsToReadable(8, 1, 22, 16, 30);
    return (
        <div className={monthCalendarStyles.container}>
            <CalNav decMonth={decMonth} incMonth={incMonth} currentMonth={currentMonth}/>
            <div className={monthCalendarStyles.monthGrid}>
                {prevMonthDaysBufferArr.map((item, idx) => (
                    <span key={idx}> </span>
                ))}
                {monthDaysArray.map((item, idx) => (
                    <Day key={idx} day={idx + 1} />
                ))}
            </div>
        </div>
    )

}

export default MonthCalendar;