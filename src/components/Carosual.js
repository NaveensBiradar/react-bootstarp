import Carousel from 'react-bootstrap/Carousel';

import React, { Component } from 'react'

export default class Carosual extends Component {
  render() {
    return (
        <div style={{padding:10}}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    width='auto'
                    height={200}
                    src="https://www.shutterstock.com/image-vector/blue-horizontal-lens-flares-pack-260nw-2202148279.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    width='auto'
                    height={200}
                    src="https://www.shutterstock.com/image-vector/blue-horizontal-lens-flares-pack-260nw-2202148279.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    width='auto'
                    height={200}
                    src="https://www.shutterstock.com/image-vector/blue-horizontal-lens-flares-pack-260nw-2202148279.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    width='auto'
                    height={200}
                    src="https://dingobrewingcompany.com.au/wp-content/uploads/2021/02/jumbo_twa_horizontal_falls_1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    width='auto'
                    height={200}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_QYkU4T6-GAKHljsAPGpK6I-xPm9EJx4jT7OmIPwO_38xQc7e2Z3efQdSXcRK0kXuAY&usqp=CAU"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    width={171}
                    height={200}
                    src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-122119019.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
  }
}
