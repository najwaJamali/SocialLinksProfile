import React from 'react';
import './App.css';

function Profile() {
    return (
        <div className='ProfilePage pt-5'>
            <div className='Form'>
                <img className='ImgProfil' src="/img/avatar-jessica.jpeg" alt="Profile" />
                <h1>Jessica Randall</h1>
                <h4 className='LocalisationTitle'>London, United Kingdom</h4>
                <h5>"Front-end developer and avid reader."</h5>
                <div className='row'>
                    <button className='ButtonOption'>GitHub</button>
                    <button className='ButtonOption'>Frontend Mentor</button>
                    <button className='ButtonOption'>LinkedIn</button>
                    <button className='ButtonOption'>Twitter</button>
                    <button className='ButtonOption'>Instagram</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
