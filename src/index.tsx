import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CurrentCalendar, RangeCalendar } from './components/calendar';
const allEvents=[
  {
    title: 'Bowling',
    startDateTime: new Date('3/28/2018 14:00'),
    endDateTime: new Date('3/28/2018 16:00'),
    description: 'We\'re going bowling, deal with it.'
  },
  {
    title: 'Karaoke',
    startDateTime: new Date('4/10/2018 18:00'),
    endDateTime: new Date('4/10/2018 20:00'),
  },
  {
    title: 'General Meeting',
    startDateTime: new Date('4/11/2018 10:00'),
    endDateTime: new Date('4/11/2018 12:00'),
  },
  {
    title: 'Docker Talk',
    startDateTime: new Date('4/11/2018 12:00'),
    endDateTime: new Date('4/11/2018 14:00'),
  },
];

const MyCal = RangeCalendar({startDate: '12/1/2017', endDate: '1/10/2019', allEvents});

ReactDOM.render(
  <div>{MyCal}</div>,
  document.getElementById('react-base') as HTMLElement
);
