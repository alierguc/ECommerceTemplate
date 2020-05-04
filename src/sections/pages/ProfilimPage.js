import React, {Component} from 'react'
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import FooterTwo from '../FooterTwo';
import Chat from '../Chat/Chat';
import AuthToolbar from '../RegisterToolbar/RegisterToolbar';
import ProfilimSections from '../Profilim';

export default class ProfilimPage extends Component {
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
   
               
            <AuthToolbar drawerClickHandler={this.drawerToggleClickHandler} />
            
            <SideDrawer show={this.state.sideDrawerOpen} />
            <main style={{ marginTop: '55px' }}>
                <ProfilimSections/>
               <FooterTwo />
              
            </main>
            <Chat/>
            {backdrop}
   
        
      </div>
        )
    }

}
