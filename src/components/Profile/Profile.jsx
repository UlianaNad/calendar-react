import React from 'react'; 
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';


const Content = () => {
    return(
      <div className='content'>
        <ProfileInfo />
        <MyPosts />
      </div>
    )
}

export default Content;