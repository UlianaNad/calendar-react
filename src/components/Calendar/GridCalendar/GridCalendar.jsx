import React, { useState } from 'react';
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
    color: #e7e7e7;
    `;

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props =>props.justifyContent ? props.justifyContent : 'flex-start'};
    ${props => props.pr && 'padding-right: ${props.pr * 8}px'}
    `;

const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
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





const GridCalendar = ({startDay}) => {
    const day = startDay.clone().subtract(1, 'day');
    
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

    const isCurrentDay = (day) => moment().isSame(day, 'day');
    console.log(isCurrentDay);
    return(
        <>
            <GridWrapper isHeader>
                {[...Array(7)].map((_,i) =>(
                    <CellWrapper isHeader >
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
                            key={dayItem.unix()} > 
                    <RowInCell justifyContent={'flex-end'}>
                        <DayWrapper>
                            {!isCurrentDay(dayItem) && dayItem.format('D')}
                            {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('D')}</CurrentDay>}
                        </DayWrapper>
                    </RowInCell>
                </CellWrapper>    
            ))}
            </GridWrapper>
        </>

    );
};


export default GridCalendar;

