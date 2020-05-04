import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import Container from '@material-ui/core/Container';
import imageOne from '../assets/img/bg.jpg';
import imageTwo from '../assets/img/bg2.jpg';
export default class TopCarousels extends Component {
    render() {
        return (

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{
           
            }}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={imageOne} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={imageTwo} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={imageTwo} alt="Third slide" />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>

                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                <div class="carousel-caption d-none d-md-block">
                    <h5>ağsldkpaoskdpoasdpoasıdpoaısd</h5>
                    <p>ağsldkpaoskdpoasdpoasıdpoaısd</p>
                </div>
            </div>

        );
    }
}