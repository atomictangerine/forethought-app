import React from 'react';

import './Header.scss'

import {WEEKDAYS, MONTHS} from './constants.js';

const TodaysMonthFormatted = () => {
  const date = new Date();
  const month = date.getMonth();

  return(
    <span className="font--grey">
      {MONTHS[month]}
    </span>
  )
}

const TodaysDateFormatted = () => {
  const date = new Date();
  const dayInWeek = date.getDay();
  const dayInMonth = date.getDate();

  
  function formatDayInWeek(dayInWeek) {
    return WEEKDAYS[dayInWeek];
  }

  function formatDayInMonth(dayInMonth) {
    if(dayInMonth === 1) {
      return dayInMonth + 'st';
    }

    if(dayInMonth === 2) {
      return dayInMonth + 'nd';
    }

    if(dayInMonth === 3) {
      return dayInMonth + 'rd';
    }

    return dayInMonth + 'th';
  }

  return (
    <div className="date">
      <span className="font--bold">{formatDayInWeek(dayInWeek)},</span> <span>{formatDayInMonth(dayInMonth)}</span>
    </div>
  );
}


class Header extends React.PureComponent {
  render() {
    return(
      <div className="container padding--large border--bottom">
        <div>
          <TodaysDateFormatted />
          <TodaysMonthFormatted />
        </div>
        <div className="tasks font--small font--grey">
          <span className="font--bold">{this.props.numberOfTasks}</span> Tasks
        </div>
      </div>
    )
  }
}

export default Header;