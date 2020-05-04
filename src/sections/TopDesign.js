import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import nav from 'react-bootstrap/Nav';
import Button from '@material-ui/core/Button';
import ExampleLogo from '../assets/img/logo.png';

export default function TopDesign() {
    return (
        <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#3F51B5'}}>
        <ul class="navbar-nav d-outline-flex p-1 ">
            <li class="nav-item active " style={{color:'white'}}>
              <a class="nav-link" href="#" style={{color:'white'}}><Button style={{color:'white',fontSize:12}}>Gizlilik Politikası </Button><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item" style={{color:'white'}}>
            <a class="nav-link" href="#" style={{color:'white'}}><Button style={{color:'white',fontSize:12}}>Çerez Politikası</Button><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item" style={{color:'white'}}>
            <a class="nav-link" href="#" style={{color:'white'}}><Button style={{color:'white',fontSize:12}}>Kullanıcı Sözleşmesi </Button><span class="sr-only">(current)</span></a>
            </li>
          </ul>
       
      </nav>
    );

}