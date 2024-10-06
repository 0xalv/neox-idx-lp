import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-2 md:mb-4 lg:mb-6">
          <h1 className="h1 mb-4">
            Investments Made <br />
            <span className="inline-block relative">
              Simple
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>{" "}
            with IDX
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-2 text-n-2 lg:mb-4">
            Choose your favorite cryptos, set your strategy, and we’ll build a
            custom index tailored to your goals — easy, smart, and ready to
            share.
          </p>
          {/* <Button href="/pricing" white>
    Create Index
  </Button> */}
        </div>
        <div className="relative max-w-[18rem] mx-auto md:max-w-4xl xl:mb-10">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] w-full h-full rounded-b-[0.9rem] overflow-hidden sm:aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490]">
                <Spline scene="https://prod.spline.design/Z-GAmLaEJgxpRmmp/scene.splinecode" />
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[150%] -translate-x-1/2 md:-top-[46%] md:w-[100%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
