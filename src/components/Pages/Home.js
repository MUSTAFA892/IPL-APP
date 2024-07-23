import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dhoni from "../../Assets/Slideshow/dhoni.jpg";
import rohit from "../../Assets/Slideshow/rohit1.jpg";
import virat from "../../Assets/Slideshow/virat kholi.jpg";
import sachin from "../../Assets/Slideshow/sachin.jpg";
import raina from "../../Assets/Slideshow/raina.jpg";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


const Home = () => {
  const slides = [
    {
      src: dhoni,
      alt: "MS-DHONI",
    },
    {
      src: rohit,
      alt: "Rohit Sharma",
    },
    {
      src: virat,
      alt: "Virat Kohli",
    },
    {
      src: sachin,
      alt: "Sachin Tendulkar",
    },
    {
      src: raina,
      alt: "Suresh Raina",
    }
  ];

  const carouselStyle = {
    maxHeight: '900px',  // Reduce the overall carousel height
  };

  const imageStyle = {
    height: '100%',     // Scale the image to fit the container height
    width: '100%',      // Ensure images fill the available width
    objectFit: 'cover',  // Maintain aspect ratio while covering the container
  };

  return (
    <>
      <style>
        {`
        .carousel-container {
            position: relative;
            overflow: hidden; /* Hide overflow */
          }

          @media (min-width: 961px) {
          .carousel-container {
              margin-top: -150px; /* Adjust this value to move the carousel upwards on desktop */
            }
          }

          @media (max-width: 960px) {
          .carousel-container {
              margin-top: -40px; /* Adjust this value to move the carousel upwards on mobile */
            }
          }
        `}
      </style>
      <div className="carousel-container" style={carouselStyle}>
        <Carousel interval={2000} autoplay={true}> {/* Change slide every 3 seconds and autoplay */}
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.src}
                alt={slide.alt}
                style={imageStyle} // Apply image styles here
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <Card style={{ borderColor: '#ff6600' }}>
        <Card.Header style={{ backgroundColor: '#fff', color: '#ff6600', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Know Who I'm
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0" style={{ color: '#000' }}>
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span style={{ color: '#ff6600' }}>Mustafa</span> 
              from <span style={{ color: '#ff6600' }}> Coimbatore, India.</span>
              <br />
              I am currently pursuing my Bachelor's degree in <span style={{ color: '#ff6600' }}>Artificial Intelligence & Data Science (AI&DS)</span> at <span style={{ color: '#ff6600' }}>KGISL Institute of Technology.</span>
              <br />
              I am currently in my second year.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ color: '#ff6600' }}><ImPointRight /> Playing Games</li>
              <li style={{ color: '#ff6600' }}><ImPointRight /> Reading</li>
              <li style={{ color: '#ff6600' }}><ImPointRight /> Travelling</li>
              <li style={{ color: '#ff6600' }}><ImPointRight /> Watching Movies</li>
            </ul>
            <p style={{ color: '#ff6600' }}>
              "Keep Trying until You succeed!"
            </p>
            <footer style={{ color: '#ff6600' }} >Mustafa</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  
    </>
  );
};

export default Home;