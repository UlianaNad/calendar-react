import React, { useEffect, useState } from 'react';
// import s from './Calendar.module.css'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment/moment';
import { Monitor } from './Monitor/Monitor';
import { Title } from './Title/Title';
import GridCalendar from './GridCalendar/GridCalendar';
//import axios from 'axios';



const ShadowWrapper = styled('div')`
    border-top: 1px solid #737374;
    border-left: 1px solid #464648;
    border-right: 1px solid #464648;
    Border-bottom: 2px solid #464648;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 0 1 #1a1a1a, 0 8px 20px 6px #888; `;
    
const DivWrapper = styled.div`
    position:relative;
    `;


const FormPositionWrapper = styled('div')`
    position: absolute;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.35);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormWrapper = styled(ShadowWrapper)`
    width:200px;
    background-color: #1e1f21;
    color: #dddddd;
    box-shadow: unset;
    `;

const ButtonsWrapper = styled('div')`
    padding: 8px 14px;
    display: flex;
    justify-content: flex-end;
`;

const EventTitle = styled('input')`
    padding: 4px 14px;
    font-size: 0.85rem;
    width: 100%;
    border: unset;
    background-color: #1e1f21;
    border-bottom: 1px solid #464648;
    color: #dddddd;
    outline: unset;
    `;

const EventBody = styled('input')`
    padding: 4px 14px;
    font-size: 0.85rem;
    width: 100%;
    border: unset;
    background-color: #1e1f21;
    border-bottom: 1px solid #464648;
    color: #dddddd;
    outline: unset;
`;

const url = 'http://localhost:4000/';

const defaultEvent = {
    title: '',
    description : '',
    data: moment().format('X')
}

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

    
    const [method, setMethod] = useState([]);
    const [isShowForm, setShownForm] = useState(false);

    const [event, setEvent] = useState(null);

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
   
const openFormHandler = (methodName, eventForUpdate) => {
    console.log('onDoubleClick', method)
    setShownForm(true);
    setEvent(eventForUpdate || defaultEvent)
    setMethod(methodName);
  
}

const cancelButtonHandler = () => {
    setShownForm(false);
    setEvent(null);
}

const changeEventHandler = (text, field) => {
    setEvent(prevState => ({
        ...prevState,
        [field]: text

    }))
}
    return(
      <DivWrapper>
        {
            isShowForm ? (
                <FormPositionWrapper onClick={cancelButtonHandler}>
                    <FormWrapper onClick={e => e.stopPropagation()}>
                        <EventTitle 
                        value={event && event.title }
                        onChange={e => changeEventHandler(e.target.value, 'title')}
                        />
                        <EventBody 
                        value={event && event.description}
                        onChange={e => changeEventHandler(e.target.value, 'description')}
                        />
                        <ButtonsWrapper>
                            <button onClick={cancelButtonHandler}>Cancel</button>
                            <button>{method}</button>
                        </ButtonsWrapper>
                    
                    </FormWrapper>    
                </FormPositionWrapper>
            ) : null
        }
          <ShadowWrapper>
            <Title/>
            <Monitor
                today = {today}
                prevHandler = {prevHandler}
                todayHandler = {todayHandler}
                nextHandler = {nextHandler}
            />
            <GridCalendar startDay={startDay} today={today} totalDays={totalDays} events={events}  event = {event} openFormHandler={openFormHandler}/>
        </ShadowWrapper>
      </DivWrapper>
    );
};


export default Calendar;

