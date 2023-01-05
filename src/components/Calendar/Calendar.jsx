import React, { useEffect, useState } from 'react';
// import s from './Calendar.module.css'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment/moment';
import { Monitor } from './Monitor/Monitor';
import { Title } from './Title/Title';
import GridCalendar from './GridCalendar/GridCalendar';
import axios from 'axios';



const ShadowWrapper = styled.div`
    border-top: 1px solid #737374;
    border-left: 1px solid #464648;
    border-right: 1px solid #464648;
    Border-bottom: 2px solid #464648;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 0 1 #1a1a1a, 0 8px 20px 6px #888; `;
    
const url = 'http://localhost:4000/';

const Calendar = () => {
    moment.updateLocale('en', {week:{dow:1}});
    const totalDays = 42;
    const [today, setToday] = useState(moment());

   // const day = startDay.clone().subtract(1, 'day');

   const startDay = today.clone().startOf('month').startOf('week');
   window.moment = moment;

    const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
    const todayHandler = () => setToday(moment());
    const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

    const [events, setEvents] = useState([]);
    
    const startDateQuery= startDay.clone().format('X');
    const endDateQuery= startDay.clone().add(totalDays, 'days').format('X'); 
    // console.log("start:", startDateQuery);
    // console.log("end:", endDateQuery);

   useEffect(() => {
    fetch(`${url}events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
        .then(res=> res.json())
        .then(res=> {
            //console.log('Response', res);
            setEvents(res);
        });
   
   }, [today]);

//    useEffect(() => {
//     axios({
//         method:"GET",
//         url: `${url}/events?date_gte=${startDateQuery}_lte=${endDateQuery}`,
//     })
//     .then((response) => {
//         const res=response.data
//         console.log(res);
//         setEvents(({
//             id: res.id,
//             title: res.title,
//             date: res.date
//         }))
//     }).catch((error) =>{
//         if(error.response){
//             console.log(error.response)
//             console.log(error.response.status)
//             console.log(error.response.headers)
//         }
//     })
//    },[])
   


    return(
        <ShadowWrapper>
            <Title/>
            <Monitor
                today = {today}
                prevHandler = {prevHandler}
                todayHandler = {todayHandler}
                nextHandler = {nextHandler}
            />
            <GridCalendar startDay={startDay} today={today} totalDays={totalDays} events={events}/>
        </ShadowWrapper>
    );
};


export default Calendar;

