import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Correct import statement
import Biking from "./Biking";
import Inrto from "./Inrto";
import Music from "./Music";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
  useEffect(() => {
    console.log("Effect is running");
    const container = document.querySelector('.aboutme');
    const sections = document.querySelectorAll('.s');
    console.log("Sections:", sections);

    const sArray = gsap.utils.toArray(sections);

    console.log("Container:", container);
    console.log("Sections:", sArray);

    sArray.forEach((section, index) => {
        gsap.to(section, {
          scale: 1 + index * 0.01, // Adjust the scaling factor as needed
          zIndex: index + 1, // Increment zIndex for each section
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${sArray.length * 100}`,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              // Scale and zIndex update based on scroll progress
              gsap.set(section, {
                scale: 1 + index * 0.1 - progress * 0.1,
                zIndex: index + 1,
              });
            },
          },
        });
      });
  

    let scrollTween = gsap.to(
      sArray,
      {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: '.aboutme',
          pin: true,
          start:'top -5px',
          scrub: 1,
          end: '+=3000',
        },
      },
      
    );

    console.log("ScrollTween:", scrollTween);
  }, []);
return (
    <div className="aboutme">
      <h1>About me</h1>
      <div className="my_list">
        <Inrto />
        <Music />
        <Biking />
        
      </div>
    </div>
  );
};

export default Aboutme;
