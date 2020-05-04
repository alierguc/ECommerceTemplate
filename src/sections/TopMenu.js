import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import nav from 'react-bootstrap/Nav';
import Button from '@material-ui/core/Button';
import ExampleLogo from '../assets/img/logo.png';

export default function TopMenu() {
    return (
        <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
        
        </div>
        <div class="navbar-brand visible-xl text-center"><Button style={{color:'black',fontSize:12}}>Gizlilik Politikası </Button></div>
        <div class="navbar-brand visible-xl text-center"><Button style={{color:'black',fontSize:12}}>Gizlilik Politikası </Button></div>
        <div class="navbar-brand visible-xl text-center"><Button style={{color:'black',fontSize:12}}>Gizlilik Politikası </Button></div>
        <div class="navbar-brand visible-xl text-center"><Button style={{color:'black',fontSize:12}}>Gizlilik Politikası </Button></div>
        <div class="navbar-brand visible-xl text-center"><Button style={{color:'black',fontSize:12}}>Gizlilik Politikası </Button></div>
        </nav>
    );

}