import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mainGal1 from'../images/glampcampgallery/gc11.jpg';
import mainGal2 from'../images/glampcampgallery/gc1.jpg';
import mainGal3 from'../images/glampcampgallery/gc10.jpg';

const CarouselGC = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
            <img
            className="d-block w-100 carousel"
            src={mainGal1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 carousel"
                src={mainGal2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 carousel"
                src={mainGal3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselGC;