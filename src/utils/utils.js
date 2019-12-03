import moment from 'moment'

export const startDayOfMonth = (currentMonth) => {
    const start = currentMonth.startOf("month").format('dddd');
    // console.log("from UTLS... startDayOfMonth> dayName start of month: ", start)
    return start;
}

export const monthLen = (currentMonth) => {
    var formedMonth = currentMonth.daysInMonth()
    return formedMonth;
}

export const prevMonthDaysSwitch = (firstDay) => {
    switch (firstDay) {
        case "Sunday":
            return 0;
        case "Monday":
            return 1;
        case "Tuesday":
            return 2;
        case "Wednesday":
            return 3;
        case "Thursday":
            return 4;
        case "Friday":
            return 5;
        case "Saturday":
            return 6;
        default:
            break;
    }
}

export const YMDNumsToReadable = (year, month, day, hour, mins) => {
    if (hour) {
        let minutes = mins || 0;
          return moment([year, month, day, hour, minutes]).format("MMM Do, 20YY h:mmA")
      }
    return moment([year, month, day]).format("MMM Do, 20YY")
}