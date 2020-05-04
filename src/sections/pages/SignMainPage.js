import React, { Component } from 'react'

import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import UrunlerSection from '../Urunler';
import OneCikanlarSection from '../OneCikanlar';

import TopCard from '../TopCard/TopCard';
import FooterTwo from '../FooterTwo';
import Chat from '../Chat/Chat';
import AuthToolbar from '../RegisterToolbar/RegisterToolbar';

export default class SignMainPage extends Component {
    state = {
        sideDrawerOpen: false,
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !this.state.sideDrawerOpen
            }
        });
    }

    backdropClickHandler = () => {
        this.setState({
            sideDrawerOpen: false
        });
    }
    render() {
        let backdrop

        if (this.state.sideDrawerOpen) {
           backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return(
            <div style={{ height: '100%' }}>
   
               
               <AuthToolbar drawerClickHandler={this.drawerToggleClickHandler} />
             
               <SideDrawer show={this.state.sideDrawerOpen} />
               <main style={{ marginTop: '55px' }}>
                  <TopCard />
                  <OneCikanlarSection oneCikanlarFunc={()=>alert("tıklandı")}/>
                  <UrunlerSection />
                 
                  <FooterTwo />
                 
               </main>
               <Chat/>
               {backdrop}
      
           
         </div>
        )
    }
    
}
