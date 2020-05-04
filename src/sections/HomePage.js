import React from 'react'
import ToolbarComp from '../sections/Toolbar/Toolbar';
import Footers from '../sections/FooterSection';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UrunlerSection from '../sections/Urunler';
import OneCikanlarSection from '../sections/OneCikanlar';
import TopCarousels from '../sections/TopCarousels';
import imageTwo from '../assets/img/bg2.jpg';
import DrawerToggleButton from '../sections/SideDrawer/DrawerToggleButton';
import sideDrawer from '../sections/SideDrawer/SideDrawer';
const HomePage = props => (


    <React.Fragment>

        <ToolbarComp click={()=>alert("aşskjdoıasjdoısajd")}/>


        <div style={{ marginTop: 55 }}>
            <TopCarousels />
        </div>


        <OneCikanlarSection />
        <UrunlerSection />
        <div style={{ marginTop: 150 }}>
            <Footers />
        </div>
    </React.Fragment>



);
export default HomePage;
