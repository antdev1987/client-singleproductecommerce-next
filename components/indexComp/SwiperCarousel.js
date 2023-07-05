import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import VideoModal from "../VideoModal";




//aqui empieza la function
const SwiperCarousel = () => {
  

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper container-lg  "
      >



        <SwiperSlide className=" d-flex align-items-center">
          <div className="row ">
            <div className="col-md-6  text-start ">
              <h2 className=" display-4 fw-bold">there for headset time song.</h2>
              <p className=" text-muted fw-semibold">
                there are many variations of passages of lorem ipsum alley of
                type and scrambled it some.
              </p>


              <button className="btn btn-danger me-3">Shop Now</button>
              <button className="play-button" onClick={handleOpen}></button>

              {isOpen && (
                <VideoModal
                  videoId="L61p2uyiMSo"
                  isOpen={isOpen}
                  onClose={handleClose}
                />
              )}

              

             
            </div>




            <div className="col-md-6">
              <img
                className="object-fit-contain"
                style={{ maxHeight: "500px", width: "100%" }}
                src="https://risingtheme.com/html/rokon-demo/rokon/assets/img/slider/home4-slider-thumbnail2.webp"
                alt="..."
              />
            </div>
          </div>


        </SwiperSlide>








        <SwiperSlide className=" d-flex align-items-center">
          <div className="row">
            <div className="col-md-6">
              <h2>there for headset time song.</h2>
              <p>
                there are many variations of passages of lorem ipsum alley of
                type and scrambled it some.
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="object-fit-contain"
                style={{ maxHeight: "500px", width: "100%" }}
                src="https://risingtheme.com/html/rokon-demo/rokon/assets/img/slider/home4-slider-thumbnail3.webp"
                alt="..."
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" d-flex align-items-center">
          <div className="row">
            <div className="col-md-6">
              <h2>there for headset time song.</h2>
              <p>
                there are many variations of passages of lorem ipsum alley of
                type and scrambled it some.
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="object-fit-contain"
                style={{ maxHeight: "500px", width: "100%" }}
                src="https://risingtheme.com/html/rokon-demo/rokon/assets/img/slider/home4-slider-thumbnail4.webp"
                alt="..."
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="row">
            <div className="col-md-6">
              <h2>there for headset time song.</h2>
              <p>
                there are many variations of passages of lorem ipsum alley of
                type and scrambled it some.
              </p>
            </div>
            <div className="col-md-6">derecha</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="row">
            <div className="col-md-6">
              <h2>there for headset time song.</h2>
              <p>
                there are many variations of passages of lorem ipsum alley of
                type and scrambled it some.
              </p>
            </div>
            <div className="col-md-6">derecha</div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
