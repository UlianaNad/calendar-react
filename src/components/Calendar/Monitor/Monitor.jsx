import React from "react";
import styled from "styled-components";

const DivWrapper= styled.div
    `display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1e1f21;
    color: #dcdddd;
    padding: 16px;
    `;

const TextWrap = styled.span
    `
    font-size: 32px;
    `;

const TitleWrapper = styled(TextWrap)`
    font-weight: bold;
    margin-right: 8px;
`;
const ButtonWrapper = styled.button`
    border: unset;
    background-color: #565759;
    height: 30px;
    margin-right: 2px;
    border-radius: 4px;
    color: #e6e6e6;
`;

const TodayButton = styled(ButtonWrapper)
    `
    padding-left: 16px;
    padding-right: 16px;
    font-weight: bold;
    `;

const Monitor = ({today, prevHandler, todayHandler, nextHandler}) => {
    return(
        <DivWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <TextWrap>{today.format('YYYY')}</TextWrap >
            </div>
            <div>
                <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
                <TodayButton onClick={todayHandler}>Today</TodayButton>
                <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
            </div>
        </DivWrapper>
    )
}
export {Monitor};