import React from "react";
import aboutImg from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" className="w-[670px] h-[470px]" />
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to Cultivate Nature's Beauty</h2>
            <p className="text__para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque soluta atque corrupti eaque culpa cumque autem rerum assumenda sapiente magnam velit voluptatum, fugiat accusamus enim dolore! Molestias, libero impedit!</p>
            <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum id cumque blanditiis dolores repudiandae cum sunt animi error sapiente repellendus non, quo itaque aliquid labore, recusandae doloremque pariatur. Fugit?</p>
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
