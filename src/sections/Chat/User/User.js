import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import MessagePanel from '../MessagePanel/MessagePanel.js';
import './User.css';


export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    panelOpen = () => {
        this.setState({
            open: true
        })
    }

    panelClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        const { userImage, userNickname, lastDate,color} = this.props;
        return (
            <div>
                <div className='user' onClick={this.panelOpen}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm6'>
                                <Avatar src={userImage} alt={userNickname} />
                            </div>
                            <div className='col-sm6 nicknameContainer'>
                                <span className='nickname'>{userNickname}</span>
                            </div>
                            <div className='col-sm6 lastActiveContainer'>
                                <span className='lastActive'>{lastDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.open ? 
                        <MessagePanel
                            nickname={userNickname}
                            image={userImage}
                            panelClose={this.panelClose}
                            activeColor={color}
                        /> 
                        
                    :null
                }
            </div>
        )
    }
}
