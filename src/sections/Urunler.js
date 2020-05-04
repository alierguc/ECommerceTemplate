import React, { Component } from "react";
import Slider from "react-slick";
import imageOne from '../assets/img/bg.jpg';
import imageTwo from '../assets/img/bg2.jpg';
import Container from '@material-ui/core/Container';
import imageThree from '../assets/img/bg3.jpg';
import Button from '@material-ui/core/Button';
import { FaRegEye } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline", borderRadius: 30, background: "#cb397a" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline", color: '#cb397a', borderRadius: 30, background: "#cb397a" }}
      onClick={onClick}
    />
  );
}


export default class UrunlerSection extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      paddingLeft: 40,
      paddingRight: 40,
      autoplay: true,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            rows: 1,
            slidesPerRow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (

      <div style={{ marginTop: 50, paddingRight: 40, paddingLeft: 40 }}>
        <p style={{ fontSize: 28 }}>Ürünler<span style={{ float: 'right', fontSize: 10 }}><Button color="light" style={{ fontSize: 10 }}>Daha Fazlasını Gör ></Button></span></p>
        <Slider {...settings} style={{ marginBottom: 40 }}>
         
            <div>
        
              <img src={imageOne} style={{ objectFit: 'cover', width: '85%' }}></img>
              <br />
              <br />
              <h5>Türü :<span>Eğitim/Kırtasiye</span></h5>
              <h5>Fiyat : <span>2000 ₺</span></h5>
              <h5>Durum : <span>Satılık</span></h5>
              <IconButton>
                <FaRegEye /><span><p style={{ marginTop: 15, fontSize: 18 }}>&nbsp;&nbsp;İncele</p></span>

              </IconButton>
          
            </div>
            
            <div>
              <img src={imageTwo} style={{ objectFit: 'cover', width: '85%' }}></img>
              <br />
              <br />
              <h5>Türü :<span>Eğitim/Kırtasiye</span></h5>
              <h5>Fiyat : <span>2000 ₺</span></h5>
              <h5>Durum : <span>Satılık</span></h5>
              <IconButton>
                <FaRegEye /><span><p style={{ marginTop: 15, fontSize: 18 }}>&nbsp;&nbsp;İncele</p></span>

              </IconButton>

            </div>
            <div>
              <img src={imageThree} style={{ objectFit: 'cover', width: '85%' }}></img>
              <br />
              <br />
              <h5>Türü :<span>Eğitim/Kırtasiye</span></h5>
              <h5>Fiyat : <span>2000 ₺</span></h5>
              <h5>Durum : <span>Satılık</span></h5>
              <IconButton>
                <FaRegEye /><span><p style={{ marginTop: 15, fontSize: 18 }}>&nbsp;&nbsp;İncele</p></span>

              </IconButton>

            </div>
            <div>
              <img src={imageOne} style={{ objectFit: 'cover', width: '85%' }}></img>
              <br />
              <br />
              <h5>Türü :<span>Eğitim/Kırtasiye</span></h5>
              <h5>Fiyat : <span>2000 ₺</span></h5>
              <h5>Durum : <span>Satılık</span></h5>
              <IconButton>
                <FaRegEye /><span><p style={{ marginTop: 15, fontSize: 18 }}>&nbsp;&nbsp;İncele</p></span>

              </IconButton>

            </div>
            <div>
              <img src={imageTwo} style={{ objectFit: 'cover', width: '85%' }}></img>
              <br />
              <br />
              <h5>Türü :<span>Eğitim/Kırtasiye</span></h5>
              <h5>Fiyat : <span>2000 ₺</span></h5>
              <h5>Durum : <span>Satılık</span></h5>
              <IconButton>
                <FaRegEye /><span><p style={{ marginTop: 15, fontSize: 18 }}>&nbsp;&nbsp;İncele</p></span>

              </IconButton>

            </div>
            <div>
              <img src={imageThree} style={{ objectFit: 'cover', width: '85%' }}></img>
              <br />
              <br />
              <h5>Türü :<span>Eğitim/Kırtasiye</span></h5>
              <h5>Fiyat : <span>2000 ₺</span></h5>
              <h5>Durum : <span>Satılık</span></h5>
              <IconButton>
                <FaRegEye /><span><p style={{ marginTop: 15, fontSize: 18 }}>&nbsp;&nbsp;İncele</p></span>

              </IconButton>

            </div>
        
        </Slider>
      </div>


    );
  }
}