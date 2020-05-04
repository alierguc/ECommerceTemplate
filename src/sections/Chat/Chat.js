import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PerfectScrollbar from 'react-perfect-scrollbar'
import User from './User/User.js';
import Button from '@material-ui/core/Button';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './Chat.css';


const ChatBox = (open,setOpen) => {
    return (
        <div className="boxContainer" onClick={() => setOpen(!open)}>
            <div className="onlineImage"></div>
            <p className="boxText">Mesajlaşma</p>
        </div>
    )
}

const ChatUserList = (open,setOpen) => {
    return (
        <div className="userContainer">
           <div className="topBar">
                <IconButton aria-label="close" onClick={() => setOpen(!open)}>
                    <CloseIcon style={{color: '#fff'}}/>
                </IconButton>
                <span className='chatUserListText'>Mesaj Kutusu</span>
           </div>
           <div className='userList'>
                <PerfectScrollbar>
                    <User 
                        userImage="https://material-ui.com/static/images/avatar/1.jpg" 
                        userNickname = 'ilkcandogan'
                        lastDate = '3 gün önce'
                        color = '#A70000'
                    />
                    <User 
                        userImage="https://material-ui.com/static/images/avatar/1.jpg" 
                        userNickname = 'ilkcandogan'
                        lastDate = 'Aktif'
                        color = '#44b700'
                    />

                </PerfectScrollbar>
           </div>
           
        </div>
    )
}

const Chat = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            {
               open ? ChatUserList(open,setOpen) :ChatBox(open,setOpen)
            }
        </div>
        
    );
}

export default Chat; 