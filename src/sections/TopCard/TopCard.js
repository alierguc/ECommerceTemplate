import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import imageOne from '../../assets/img/expansionpanelone.jpg'
import imageTwo from '../../assets/img/pricetwo.jpg'
import Button from '@material-ui/core/Button';
import './TopCard.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function TopCard() {
    const classes = useStyles();
    return (
        <div className='containerCardTop'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4' style={{ marginBottom: '10px' }}>
                        <ExpansionPanel defaultExpanded={true} className='cardStyle'>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Typography className={classes.heading}>Kendi sisteminizi kurun
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>

                                <Typography>

                                    <div>
                                        <img src={imageOne} style={{width:450,height:200}}></img>
                                    </div>

                                </Typography>



                                <p>Kendi E-ticaret veya Sanal Market sisteminizi kurun. Global rekabete sizde katılın.</p>



                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    <div className='col-lg-4' style={{ marginBottom: '10px' }}>
                        <ExpansionPanel defaultExpanded={true} className='cardStyle'>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Sistem satın alın veya Kiralayın</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>

                                <Typography>

                                    <div>
                                        <img src={imageTwo} style={{width:700,height:200}}></img>
                                    </div>

                                </Typography>
                                <p>Sistemimiz üzerinden hızlı ve güvenli şekilde E-ticaret sistemi satın alın veya kiralayın. Hem zamandan tasarruf edin, hem de paradan</p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    <div className='col-lg-4' style={{ marginBottom: '10px' }}>
                        <ExpansionPanel defaultExpanded={true} className='cardStyle'>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Expansion Panel 1</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>

                </div>
            </div>
        </div>
    )
}
