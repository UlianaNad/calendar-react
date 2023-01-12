import React from 'react';
// import s from './Calendar.module.css'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment/moment';


const GridWrapper = styled.div
    `display: grid;
    grid-template-columns: repeat(7, 1fr);
    // grid-template-rows: repeat(6, 1fr);
    background-color: ${props => props.isHeader  ?'#1e1f21' : '#404040'} ;
    gap: 2px;
    ${props => props.isHeader  && 'border-bottom: 2px solid #404040'}
    ;`

const CellWrapper = styled.div`
    min-width: 140px;
    min-height: ${props => props.isHeader ? 24 : 80 }px;
    background-color: ${props => props.isWeekend ? '#272828' : '#1e1f21'};
    color: ${props => props.isSelectedMonth ? '#e7e7e7' : '#555759'};
    `;

const RowInCell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props =>props.justifyContent ? props.justifyContent : 'flex-start'};
    padding: ${props => props.pr && 'padding-right: ${props.pr * 8}px'}
    `;

const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
    cursor: pointer;
    `;

const CurrentDay = styled.div 
`   height: 100%;
    width: 100%;
    background: #f00;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ShowDayWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`;

const EventListWrapper = styled.ul`
    margin: unset;
    list-style-position: inside;
    padding-left: 4px;    
`;

const EventItemWrapper = styled('button')`
    position: relative;
    left: -14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 114px;
    border: unset;
    background: unset;
    color: #dddddd;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;

const GridCalendar = ({startDay, today, totalDays, events, openFormHandler}) => {
    const day = startDay.clone().subtract(1, 'day');
    
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

    const isCurrentDay = (day) => moment().isSame(day, 'day');
    const isSelectedMonth = (day) => today.isSame(day, 'month');
    //console.log(isCurrentDay);
    return(
        <div>
            <GridWrapper isHeader>
                {[...Array(7)].map((_,i) =>(
                    <CellWrapper isHeader isSelectedMonth key={i}>
                        <RowInCell justifyContent={'flex-end'} pr={1}>
                            {moment().day(i+1).format('ddd')}
                        </RowInCell>
                    </CellWrapper>
                ))}
            </GridWrapper>
            <GridWrapper>
            {daysArray.map((dayItem) => (
                <CellWrapper 
                            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                            key={dayItem.unix()} 
                            isSelectedMonth={isSelectedMonth(dayItem)}
                            > 
                    <RowInCell justifyContent={'flex-end'}>
                        <ShowDayWrapper>
                            <DayWrapper onDoubleClick={(e) => openFormHandler('Create')}>
                                {
                                    isCurrentDay(dayItem) ? (<CurrentDay>{dayItem.format('D')}</CurrentDay>) : (dayItem.format('D'))
                                }
                            </DayWrapper>
                        </ShowDayWrapper>
                        <EventListWrapper>
                            {
                                events.filter(event => event.date >= dayItem.format('X') && event.date <= dayItem.clone().endOf('day').format('X') == true)
                                .map(event => (
                                    <li key = {event.id}>
                                        <EventItemWrapper onDoubleClick = {(e) => openFormHandler('Update',event)}>
                                            {event.title}
                                        </EventItemWrapper>
                                    </li>
                                
                                ))
                            }
                        </EventListWrapper>
                    </RowInCell>
                </CellWrapper>    
            ))}
            </GridWrapper>
        </div>

    );
};


export default GridCalendar;

