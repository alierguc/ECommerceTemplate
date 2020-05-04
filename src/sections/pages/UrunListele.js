import React, { Component } from 'react'
import ToolbarComp from '../Toolbar/Toolbar';
import Chat from '../Chat/Chat';
import FooterTwo from '../FooterTwo';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import TopCard from '../TopCard/TopCard';
import OneCikanlaricerik from '../OneCikanlaricerik';
import Container from '@material-ui/core/Container';
export default class UrunListele extends Component {
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
            <Container fixed>
            <OneCikanlaricerik/>
            </Container>
            
            <FooterTwo />

            </main>
            <Chat />
            {backdrop}


         </div>
      )
   }
}
