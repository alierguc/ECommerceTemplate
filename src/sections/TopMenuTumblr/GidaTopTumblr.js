import React from 'react'
import { FaRegEye } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import imageTwo from '../../assets/img/bg1.jpg';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
export default function GidaTopTumblr() {

    return (
        <div className="card">
            <Container fixed>     
            <img className="card-img-top" src={imageTwo} alt="Card image cap" style={{ borderRadius: 10,marginTop:20}} />
            </Container>
       
            <div className="card-body" >

                <p>Türü :<span>Eğitim/Kırtasiye</span></p>
                <p>Fiyat : <span>2000 ₺</span></p>
                <p>Durum : <span>Satılık</span></p>
                <Button style={{backgroundColor:"#CB397A",width:'100%',height:50}}>
                    <FaRegEye style={{color:'white',height:30,width:30,marginTop: -9}}/>
                    <span><p style={{ marginTop: 9, fontSize: 12,color:'white' }}>&nbsp;&nbsp;&nbsp;İncele</p></span>
                </Button>
            </div>
        </div>
    )
}
