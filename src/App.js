import React, { Component } from 'react'
import Toolbar from './sections/Toolbar/Toolbar.js';
import SideDrawer from './sections/SideDrawer/SideDrawer.js';
import Backdrop from './sections/Backdrop/Backdrop.js';
import UrunlerSection from './sections/Urunler';
import OneCikanlarSection from './sections/OneCikanlar';
import TopCarousels from './sections/TopCarousels';
import ToolbarComp from './sections/Toolbar/Toolbar.js';
import TopCard from '../src/sections/TopCard/TopCard';
import FooterTwo from './sections/FooterTwo';
import Chat from '../src/sections/Chat/Chat';
import AuthToolbar from '../src/sections/RegisterToolbar/RegisterToolbar';

export default class App extends Component {
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
      return (
         <div style={{ height: '100%' }}>
   
               
               <ToolbarComp drawerClickHandler={this.drawerToggleClickHandler} />
             
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
