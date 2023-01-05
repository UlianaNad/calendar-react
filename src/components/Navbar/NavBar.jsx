import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../App.css';
import Nav from 'react-bootstrap/Nav';
import s from './NavBar.module.css';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
   return (
    <Nav defaultActiveKey="/home" className={"flex-column "+ '' + s.Nav}>
      <NavLink to="/profile" className={({isActive})=> isActive ? s.active: undefined} > Profile </NavLink>
      <NavLink to="/dialogs" className={({isActive})=> isActive ? s.active: undefined} >Messages</NavLink>
      <NavLink to="/news" className={({isActive})=> isActive ? s.active: undefined}  >News</NavLink>
      <NavLink to="/music" className={({isActive})=> isActive ? s.active: undefined} >Music</NavLink>
      <NavLink to="/settings" className={({isActive})=> isActive ? s.active: undefined} >Settings</NavLink>
      <NavLink to="/calendar" className={({isActive})=> isActive ? s.active: undefined} >Calendar</NavLink>
    </Nav>
  );
}

export default NavBar;