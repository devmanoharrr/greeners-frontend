import React from "react";
import aboutImg from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" className="w-[630px] h-[430px]" />
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to Cultivate Nature's Beauty</h2>
            <p className="text__para">At our core, we take pride in nurturing and enhancing the beauty of nature. Each garden we cultivate is a testament to our dedication to preserving and celebrating the natural world. With care and passion, we strive to create spaces that inspire and delight.</p>
            <p className="text__para mt-[30px]">Our commitment to excellence drives us to go above and beyond in every project. We believe in the power of nature to heal, rejuvenate, and inspire. Through our work, we aim to foster a deeper connection between people and the natural environment, enriching lives and communities along the way.</p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
