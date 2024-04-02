import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function ImageSlider() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const urls = data[0].images.map((image) => image.url);
          setSlides(urls);
        }
      })
      .catch((error) => console.error("Error fetching images"));
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[600px] h-[700px] w-full m-auto py-16 px-4 relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-[500px] h-[300px] rounded-2xl bg-center bg-cover duration-500 translate-x-8"
      ></div>
      {/* Left Arrow */}
      <div className=" hidden group-hover:block absolute top-[31%] -translate-x-0 translate-y-[-50%] left-12 text-2xl rounded-full p-2 text-black cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[31%] -translate-x-0 translate-y-[-50%] right-12 text-2xl rounded-full p-2 text-black cursor-pointer ">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
