import React, { useRef } from "react";
import Navbar from "./Navbar";
import BaseButton from "./common/basebutton";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Hero() {
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(textRef.current, 1.8, {
      x: -100,
      ease: "power4.out",
      delay: 0.3,
      skewX: 7,
      stagger: {
        amount: 0.3,
      },
      autoAlpha: 0,
    });
  });
  return (
    <section className="overflow-hidden">
      <div className="bg-hero-background lg:h-screen h-[70-vh] w-screen  absolute bg-cover bg-right-to lg:bg-center bg-no-repeat"></div>
      <Navbar />
      <div className="relative xl:max-w-6xl lg:px-10 mx-auto my-auto mt-20 md:mt-0">
        <div
          ref={textRef}
          className="overflow-hidden md:h-[70vh] h-[60vh] flex flex-col md:gap-8 gap-5 justify-center items-center lg:items-start md:w-[43%] w-full"
        >
          <span className="md:text-sm text-xs font-semibold uppercase ">
            Welcome to Root Cause
          </span>
          <span className="mg:text-8xl md:text-6xl text-4xl w-[11ch] lg:text-left text-center">
            Rejuvenated Body & Soul
          </span>
          <span className="lg:text-2xl md:text-xl text-lg md:text-left text-center font-medium w-full">
            We are a Unique Physical Therapy Clinic
          </span>
          <BaseButton title="Book an appointment" filled bgColor="bg-[white]">
            <Image
              className="md:h-5 md:w-4 w-4 h-4"
              src="/assets/icons/arrow-right.svg"
              alt="Arrow Right Icon"
              height={20}
              width={20}
            />
          </BaseButton>
        </div>
      </div>
    </section>
  );
}
