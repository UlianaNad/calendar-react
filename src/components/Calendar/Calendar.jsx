import React, { useState } from 'react';
// import s from './Calendar.module.css'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment/moment';
import { Monitor } from './Monitor/Monitor';
import { Title } from './Title/Title';
import GridCalendar from './GridCalendar/GridCalendar';



const ShadowWrapper = styled.div`
    border-top: 1px solid #737374;
    border-left: 1px solid #464648;
    border-right: 1px solid #464648;
    Border-bottom: 2px solid #464648;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 0 1 #1a1a1a, 0 8px 20px 6px #888; `;
    


const Calendar = () => {
    moment.updateLocale('en', {week:{dow:1}});
   // const totalDays = 42;
    const [today, setToday] = useState(moment());

   // const day = startDay.clone().subtract(1, 'day');

   const startDay = today.clone().startOf('month').startOf('week');

    const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
    const todayHandler = () => setToday(moment());
    const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

   

    return(
        <ShadowWrapper>
            <Title/>
            <Monitor
                today = {today}
                prevHandler = {prevHandler}
                todayHandler = {todayHandler}
                nextHandler = {nextHandler}
            />
            <GridCalendar startDay={startDay}/>
        </ShadowWrapper>
    );
};


export default Calendar;

