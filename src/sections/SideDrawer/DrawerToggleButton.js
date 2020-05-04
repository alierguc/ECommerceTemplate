import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';

const drawerToggleButton = props => (
    <IconButton style={{color:'#fff'}} aria-label="drawerToggleButton" component="span" onClick={props.click}>
        <DehazeIcon />
    </IconButton>
)

export default drawerToggleButton;