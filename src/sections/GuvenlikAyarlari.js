import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: 40,
    paddingLeft: 40,
    marginBottom: 50,
    marginTop: 30,
    width: '90%',
  },
  heading: {

    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  textfieldLabelSize: {
    fontSize: 8,
    labelSize: 8,
  }
}));
export default function GuvenlikAyarlari() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <h4 style={{ marginBottom: 15 }}><span><SettingsApplicationsIcon /></span>&nbsp;&nbsp;Güvenlik Ayarları</h4>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Email Adresimi Değiştir</Typography>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form noValidate autoComplete="off" style={{ width: '100%' }}>
            <TextField id="outlined-basic" style={{ width: '100%' }} label="Mevcut Email Adresiniz" variant="outlined" />
            <br />
            <br />
            <TextField id="outlined-basic" style={{ width: '100%' }} label="Yeni Email Adresiniz" variant="outlined" />
            <br />
            <br />
            <TextField id="outlined-basic" style={{ width: '100%' }} label="Yeni Email Adresiniz Tekrar" variant="outlined" />
            <div style={{marginTop:20}}><Button style={{backgroundColor:'#cc0d74',color:'white',width:'100%',paddingLeft:10,paddingRight:10}}><SaveOutlinedIcon/>&nbsp;&nbsp; Kaydet</Button></div>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Şifremi Değiştir</Typography>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form noValidate autoComplete="off" style={{ width: '100%' }}>
            <TextField id="outlined-basic" style={{ width: '100%' }} label="Mevcut Şifreniz" variant="outlined" />
            <br />
            <br />
            <TextField id="outlined-basic" style={{ width: '100%' }} label="Yeni Şifreniz" variant="outlined" />
            <br />
            <br />
            <TextField id="outlined-basic" style={{ width: '100%' }} label="Yeni Şifreniz Tekrar" variant="outlined" />
            <div style={{marginTop:20}}><Button style={{backgroundColor:'#cc0d74',color:'white',width:'100%',paddingLeft:10,paddingRight:10}}><SaveOutlinedIcon/>&nbsp;&nbsp; Kaydet</Button></div>
            
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Kayıtlı Telefon Numarası Değiştir</Typography>
          <Typography className={classes.secondaryHeading}>

          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <TextField id="outlined-basic" style={{ width: '100%' }} label="Yeni Telefon Numaranız" variant="outlined" />
            <div style={{marginTop:20}}><Button style={{backgroundColor:'#cc0d74',color:'white',width:'100%',paddingLeft:10,paddingRight:10}}><SaveOutlinedIcon/>&nbsp;&nbsp; Kaydet</Button></div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  
  )
}
