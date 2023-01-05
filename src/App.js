import React,  { useEffect, useState } from 'react'; 
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import moment from 'moment/moment';
import Calendar from './components/Calendar/Calendar';


const App = () => {

  moment.updateLocale('en', {week:{dow:1}});

 
  return (
    <BrowserRouter>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
        <div className='container app-wrapper'>
          <Header/>
          <NavBar/>
          <div className="container">
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route  path='/dialogs/*' element={<Dialogs />}/>
              <Route path='/news' element={<News />}/>
              <Route path='/music' element={<Music />}/>
              <Route path='/settings' element={<Settings />}/>
              <Route path='/calendar' element={<Calendar />}/>
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
