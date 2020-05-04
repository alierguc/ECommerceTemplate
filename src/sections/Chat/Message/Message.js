import React, { Component } from 'react'
import './Message.css';

export default class Message extends Component {
    render() {
        const { text,my } = this.props;
        return (
            <div>
                <div className={my ? 'myMessage' : 'youMessage'}>
                    <span>{text}</span>
                </div>
            </div>
        )
    }
}
