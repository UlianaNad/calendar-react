import React from 'react'; 
import s from './ProfileInfo.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileInfo = () => {
    return(
    <div className="card">
        <div className="card-body">
            <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" />
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="card mb-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default ProfileInfo;