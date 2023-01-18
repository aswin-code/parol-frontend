import React from 'react'
import './NavBar.scss'
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
const NavBar = () => {
    return (
        <nav>
            <div className="left">
                <h3>Jobstart</h3>
                <div className="btn-group">
                    <button className='active btn'>Find jobs</button>
                    <button className='btn'>company reviews</button>
                </div>
            </div>
            <div className="right">
                <div className="icons">
                    <MessageIcon />
                    <NotificationsIcon />
                    <PersonIcon />
                </div>
                <div>
                    <span>Employers/Post Job</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar