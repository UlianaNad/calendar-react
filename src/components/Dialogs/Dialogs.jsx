import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name:'Igor'},
        {id: 2, name:'Olga'},
        {id: 3, name:'Eva'},
        {id: 4, name:'Lora'},
        {id: 5, name:'Sasha'},
        {id: 6, name:'Sofia'},
        {id: 7, name:'Kolya'},
        {id: 8, name:'Vasia'}
    ]

    let dialogElement = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);

    let messagesData = [
        {id: 1, message:'Hi!'},
        {id: 2, message:'How are you?'},
        {id: 3, message:'I am fine. And you?'},
        {id: 4, message:'Ok!'}
    ]

    let messageElement = messagesData.map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems + '' + s.active}>
               {dialogElement}
            </div>
            <div className={s.messages}>
               {messageElement}
            </div>
        </div>
    )
}


export default Dialogs;