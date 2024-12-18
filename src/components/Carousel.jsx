import React, { useState, useEffect, useRef } from "react";
import images from "../constants/images";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [images.ikoyi1, images.ikoyi2, images.ikoyi3, images.ikoyi4];
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const timeRunning = 3000; // Time for transition effect
  const timeAutoNext = 7000; // Auto transition every 7 seconds
  let runTimeOut;
  let runNextAuto;

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, timeAutoNext);

    return () => {
      clearInterval(autoSlide);
      clearTimeout(runNextAuto);
    };
  }, []);

  // Navigate to next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    showSlider("next");
  };

  // Navigate to previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    showSlider("prev");
  };

  // Show slider with transition
  const showSlider = (type) => {
    const carouselDom = carouselRef.current;
    const sliderDom = carouselDom.querySelector(".list");
    const thumbnailBorderDom = carouselDom.querySelector(".thumbnail");
    const sliderItemsDom = sliderDom.querySelectorAll(".item");
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    if (type === "next") {
      sliderDom.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list">
        {slides.map((img, index) => (
          <div
            className={`item ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={img} alt={`Slide ${index}`} />
            <div className="overlay"></div> {/* Overlay */}
            <div className="content">
              <div className="author">OFFICE OF THE YOUTH LEADER (OLORI ODO)</div>
              <div className="title">ANCIENT IKOYI</div>
              <div className="des">
              Ikoyi, Osun, is a charming ancient town known for its breathtaking mountains, tranquil rivers, and lush forest reserves. The area boasts rich biodiversity, offering a peaceful escape amidst nature. Its serene landscapes and cultural heritage make it an ideal destination for adventurers and those seeking relaxation.
              </div>
              <div className="buttons">
                <button
                  style={{
                    background: "white",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  SEE MORE
                </button>
                <button  style={{
                    border: "2px solid white",
                    color: "white",
                    fontWeight: "600",
                  }}>READ MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((img, index) => (
          <div className="item" key={index}>
            <img src={img} alt={`Thumbnail ${index}`} />
            <div className="overlay"></div> {/* Overlay */}
            <div className="content"></div>
          </div>
        ))}
      </div>

      {/* Arrows for navigation */}
      <div className="arrows">
        <button id="prev" ref={prevRef} onClick={handlePrev}>
          <AiOutlineArrowLeft />
        </button>
        <button id="next" ref={nextRef} onClick={handleNext}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
