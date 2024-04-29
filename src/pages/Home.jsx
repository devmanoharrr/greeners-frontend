import React from "react";

import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpeg";
import heroImg03 from "../assets/images/hero-img03.jpg";
import icon01 from "../assets/images/icon01.jpg";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-img.jpg";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import GreenerList from "../components/Greeners/GreenerList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">Enhancing Lives through Gardening and Cleaning.</h1>
                <p className="text__para">At our core, we believe in the transformative power of gardening and cleaning. By nurturing plants and maintaining clean spaces, we not only enhance our surroundings but also uplift spirits. Our mission is to bring joy, wellness, and sustainability to every home and community we serve.</p>
                <button className="btn"><Link to="/greeners">Request Booking</Link></button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Customer Satisfaction</p>
                </div>
              </div>
            </div>
            {/* hero content */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Creating Beautiful Gardens</h2>
            <p className="text__para text-center">Transform your outdoor space with our expert gardening services. From design to maintenance, we offer unparalleled care for your garden.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" className="w-[100px] h-[151px]" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Greener</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates itaque amet fuga iste inventore iusto!</p>

                <Link to="/greeners" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates itaque amet fuga iste inventore iusto!</p>

                <Link to="/greeners" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Schedule Bookimg</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates itaque amet fuga iste inventore iusto!</p>

                <Link to="/greeners" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Explore Our Services</h2>
<p className="text__para text-center">Discover a world of possibilities with our comprehensive range of services tailored to meet your needs.</p>
          </div>

          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Meet Our Top Greeners</h2>
<p className="text__para text-center">Our top greeners are seasoned professionals committed to excellence</p>
          </div>
          <GreenerList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" className="w-[580px] h-[675px]" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most question by our beloved Customers</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Discover Customer Stories</h2>
<p className="text__para text-center">Explore the experiences of our valued customers and hear firsthand how our services have transformed their lives.</p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
