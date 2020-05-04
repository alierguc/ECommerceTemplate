import React from 'react';
import '../SideDrawer/SideDrawer.css';
import logo from '../../assets/img/logo.png'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { GoSignIn } from "react-icons/go";

import Badge from '@material-ui/core/Badge';
import { GoOrganization } from "react-icons/go";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Container } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import imageTwo from '../../assets/img/logo.png';
import { MdLocalPizza } from "react-icons/md";
import { FaRobot } from "react-icons/fa"; /* Elektronik */
import { FaBusAlt } from "react-icons/fa"; /* Kargo/taşımacılık */
import { FaAssistiveListeningSystems } from "react-icons/fa"; /* Diğer */
import { TiChartLine } from "react-icons/ti"; /* Seo */
import { MdBrush } from "react-icons/md"; /* Grafik Tasarım */
import { GoDeviceMobile } from "react-icons/go"; /* Mobile */
import { DiWebplatform } from "react-icons/di"; /*Web */
import { FaLanguage } from "react-icons/fa"; /* Çevirmenlik */
import { FaMedapps } from "react-icons/fa"; /* Sosyal medya Yönetimi */
import { FaMagic } from "react-icons/fa"; /* UI UX Tasarımı */
import { FaBraille } from "react-icons/fa"; /* Reklam ve Banner Tasarımı */
import { TiCodeOutline } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa"; /* Danışmanlıklar */
import GavelIcon from '@material-ui/icons/Gavel';
import { MdSearch } from "react-icons/md";
const sideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'

    }
    return (
        <nav className={drawerClasses}>
            <PerfectScrollbar>
            <ListItem style={{marginTop:30,marginBottom:30}}><img src={imageTwo} alt="Smiley face" height="120" width="100%"></img></ListItem>
            <ListItem button >&nbsp;&nbsp;&nbsp;<ListItemText primary="Kullanıcı Sözleşmesi" /></ListItem>
            <ListItem button >&nbsp;&nbsp;&nbsp;<ListItemText primary="Çerez Politikası" /></ListItem>
            <ListItem button >&nbsp;&nbsp;&nbsp;<ListItemText primary="Kullanıcı Sözleşmesi" /></ListItem>
                <div style={{ paddingLeft: 15, marginTop: 30, overflow: 'auto',marginBottom:20 }}><h5>Ürünler</h5></div>
                <List component="nav" aria-label="main mailbox folders" style={{ overflow: 'auto' }}>
                
                    <ListItem button><MdLocalPizza style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Gıda" /><Badge badgeContent={4} color="primary"></Badge></ListItem>
                    <ListItem button><FaRobot style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp; <ListItemText primary="Elektronik" /><Badge badgeContent={4} color="primary"></Badge></ListItem>
                    <ListItem button> <FaBusAlt style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Kargo/Taşımacılık" /><Badge badgeContent={4} color="primary"></Badge></ListItem>
                    <ListItem button> <TiCodeOutline style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Bilişim" /><Badge badgeContent={4} color="primary"></Badge></ListItem>
                    <ListItem button> <FaAssistiveListeningSystems style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Diğer" /><Badge badgeContent={4} color="primary"></Badge></ListItem>
                    <Divider />
                    <div style={{ paddingLeft: 15, marginTop: 30,marginBottom:20}}><h5>Freelancer</h5></div>
                    <ListItem button><TiChartLine style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Seo" /></ListItem>
                    <ListItem button> <MdBrush style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Grafik Tasarım" /></ListItem>
                    <ListItem button><GoDeviceMobile style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Mobil" /></ListItem>
                    <ListItem button> <DiWebplatform style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Web" /></ListItem>
                    <ListItem button> <FaLanguage style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Çevirmenlik" /></ListItem>
                    <ListItem button><FaMedapps style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Sosyal Medya Yönetimi" /></ListItem>
                    <ListItem button><FaMagic style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="UI/UX Tasarımı" /></ListItem>
                    <ListItem button><FaBraille style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Reklam ve Banner Tasarımı" /></ListItem>
                    <ListItem button> <FaUserCheck style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Danışmanlıklar" /></ListItem>
                    <Divider />
                    <div style={{ paddingLeft: 15, marginTop: 30,marginBottom:20 }}><h5>Avukatlar</h5></div>
                    <ListItem button><MdSearch style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Avukat Bul" /></ListItem>
                    <ListItem button><GavelIcon style={{width:30,height:30,color:'#cb397a'}}/>&nbsp;&nbsp;&nbsp;<ListItemText primary="Avukatlık Başvurusu" /></ListItem>
                    <div style={{ paddingLeft: 15, marginTop: 30,marginBottom:60 }}></div>
                </List>
                </PerfectScrollbar>
        </nav>
       
    );
}

export default sideDrawer;