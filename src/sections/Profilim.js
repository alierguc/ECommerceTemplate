import React from 'react'
import '../styles/ProfileStyle.css'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import imageTwo from '../assets/img/bg2.jpg';
import { Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MailIcon from '@material-ui/icons/Mail';
import Footers from '../sections/FooterSection';
import IlanlarimSection from '../sections/Ilanlarim';
import GuvenlikAyarlari from '../sections/GuvenlikAyarlari';
import Tooltip from '@material-ui/core/Tooltip';
import AuthToolbar from '../sections/RegisterToolbar/RegisterToolbar';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
const StyledBadge = withStyles((theme) => ({
    badge: {

        width: 33,
        marginTop: -30,
        height: 33,
        borderRadius: '100%',
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 100,
            animation: '$ripple 1.8s infinite ease-in-out',
            border: '6px solid currentColor',
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


const useStyles = makeStyles((theme) => ({
    root: {
        borderRightColor: '#ce0e0e',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatarStyle: {
        display: 'flex',

        justifyContent: 'center',
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    profileContent: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 20
    },
    otherContent: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 40
    },
    infoContent: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 20
    }
}));

export default function ProfilimSections() {
    const classes = useStyles();

    return (
        
        <div>
            <div className='container-fluid'>
                <div class="row">
                    <div class="col-sm-3"><div className={classes.root}>
                        <StyledBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >

                            <div style={{ marginTop: 50, alignSelf: 'center' }}>
                                <Tooltip title="Profil Fotoğrafımı Değiştir">
                                    <Fab color="secondary"
                                        style={{ position: 'absolute', zIndex: 1 }}
                                        aria-label="add">
                                        <PhotoCameraOutlinedIcon />
                                    </Fab>
                                </Tooltip>
                                <Avatar alt="Remy Sharp" className={classes.avatarStyle} src={imageTwo} />

                                <h3 className={classes.profileContent}> SuperUser1</h3>
                                <h5 className={classes.otherContent}><b>Telefon Numarası</b></h5>
                                <h6 className={classes.infoContent}>+90 1216546 4446 6</h6>
                                <h5 className={classes.otherContent}><b>İletişime Geçenler</b></h5>
                                <h6 className={classes.infoContent}>14 kişi</h6>
                                <h5 className={classes.otherContent}><b>Kayıt Tarihi</b></h5>
                                <h6 className={classes.infoContent}>14/04/1999</h6>
                                <h5 className={classes.otherContent}><b>Kayıtlı E-mail Adresi</b></h5>
                                <h6 className={classes.infoContent}>superuser1@gmail.com</h6>
                                <IconButton>
                                    <MailIcon /><span><p style={{ marginTop: 15, fontSize: 18 }}>&nbsp;&nbsp;Mesaj Gönder</p></span>

                                </IconButton>
                            </div>

                        </StyledBadge>

                    </div><Divider /></div>

                    <div class="col-sm-9"><div style={{ backgroundColor: 'white' }}><IlanlarimSection />   <Divider /><GuvenlikAyarlari /></div></div>

                </div>
            </div>
           
        </div>



    )
}
