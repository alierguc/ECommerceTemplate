import React, { Component } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Message from '../Message/Message.js';

import './MessagePanel.css';

export default class MessagePanel extends Component {
    render() {
        const { nickname, image, panelClose, activeColor } = this.props;

        const StyledBadge = withStyles((theme) => ({
            badge: {
                backgroundColor: activeColor,
                color: activeColor,
                boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
                '&::after': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    animation: '$ripple 1.2s infinite ease-in-out',
                    border: '1px solid currentColor',
                    content: '""',
                },
            },
            '@keyframes ripple': {
                '0%': {
                    transform: 'scale(.8)',
                    opacity: 1,
                },
                '100%': {
                    transform: 'scale(2.4)',
                    opacity: 0,
                },
            },
        }))(Badge);


        return (
            <div className="messagePanelContainer">
                <div className="topBarPanel">
                    <div className='container' style={{ margin: '8px', color: '#fff' }}>
                        <div className='row'>
                            <div className='col-sm6'>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar src={image} alt={nickname} />
                                </StyledBadge>
                            </div>
                            <div className='col-sm6 nicknameContainer'>
                                <span className='nickname'>{nickname}</span>
                            </div>
                            <div className='col-sm6 closeButton'>
                                <IconButton aria-label="close" onClick={() => panelClose()}>
                                    <CloseIcon style={{ color: '#fff' }} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="messagePlace">
                    <PerfectScrollbar>
                        <Message
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum."
                            my={true}
                        />
                        <Message
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum."
                            my={false}
                        />
                    </PerfectScrollbar>
                </div>
                <div className="messageSend">
                    <div className="row">
                        <div className="col-9">
                            <input className="messageInput" type="text" placeholder="Bir mesaj yazın..." />
                        </div>
                        <div className="col-3">
                            <IconButton style={{marginLeft: '10px'}} aria-label="send" onClick={() => alert("asdf")}>
                                <SendIcon style={{ color: '#C7C3C3' }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
