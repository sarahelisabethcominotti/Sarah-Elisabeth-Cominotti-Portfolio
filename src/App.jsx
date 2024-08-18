import "./App.css";
import gsap from "gsap";
// import TextPlugin from "gsap/src/TextPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

import { CARDS_API, getAllCards } from "./CARDS_API";
import CardsContent from "./components/CardsContent";
import { SKILLS_API, getAllSkills } from "./SKILLS_API";
import SkillsContent from "./components/SkillsSection";
import HeaderSection from "./components/AboutMeSection";
import Navigation from "./components/Navigation";
import TitleSection from "./components/TitleSection";

export const CardsContext = createContext();
export const SkillsContext = createContext();
// export const SkillsContext = createContext()
// const initalCards = null

gsap.registerPlugin(ScrollTrigger);

function App() {
  // useEffect(() => {
  // gsap.to(".card-item", {
  //   scrollTrigger: {
  //     trigger: ".card-item",
  //     toggleActions: "restart pause none none"
  //   },
  //   x: 400,
  //   rotation: 360,
  //   duration: 3
  // })

  // ---------------------------------------------------- SCROLL
  //   ScrollTrigger.create({
  //     scrollTrigger: {
  //       trigger: '.work-section',
  //       toggleActions: "restart pause reverse none"
  //     },
  //     animation: gsap.fromTo('.card-item', {scale: 0.5 }, {scale: 10}),
  //     pin: true,
  //     start: 'center center',
  //     end: 'bottom top',
  //     scrub: 0.5, // I like the 1 sec delay, set to true for exact anime on scroll
  //     //markers: true,
  //     markers: true
  //   })
  // }, [])

  // ----------------------------------------------------- TEXT ANIMATION
  // gsap.registerPlugin(TextPlugin);

  // const textContainer = document.getElementById("text-container");
  // const texthello = "Hello, ";
  // const textworl = "worl";
  // const textname = "I'm Sarah Elisabeth Cominotti";

  // function typeText(target, text, delay = 0) {
  //   return gsap.to(target, {
  //     text: text,
  //     duration: text.length * 0.1,
  //     ease: "none",
  //     delay: delay,
  //   });
  // }

  // function deleteTextBackwards(target, text, delay = 0) {
  //   const timeline = gsap.timeline({ delay: delay });
  //   // const numChars = texthello.length;

  //   for (let i = 0; i < 4; i++) {
  //     timeline.to(target, {
  //       text: text.substring(0, text.length - i - 1),
  //       duration: 0.4,
  //       ease: "none",
  //     });
  //   }
  //   return timeline;
  // }

  // gsap
  //   .timeline()
  //   .add(typeText(textContainer, texthello + textworl)) // Type the initial part of the text
  //   .add(deleteTextBackwards(textContainer, texthello + textworl, 0.3)) // Delete "worl" one letter at a time in reverse
  //   .add(typeText(textContainer, texthello + textname)); // Type the replacement text "I'm Sarah Elisabeth Cominotti"

  const [cards, setCards] = useState([]);
  const [skills, setSkills] = useState([]);
  // const [dataSet, setDataSet] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const [cardsRes, skillsRes] = await Promise.all([
        fetch(CARDS_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query: getAllCards }),
        }),
        fetch(SKILLS_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query: getAllSkills }),
        }),
      ]);

      if (!cardsRes.ok) throw new Error("Failed to fetch cards");
      if (!skillsRes.ok) throw new Error("Failed to fetch skills");

      const cards = await cardsRes.json();
      const skills = await skillsRes.json();
      // console.log('asbcs',cards, skills)
      return { cards, skills };
    },
  });

  useEffect(() => {
    if (data) {
      // const cards = data.data.portfolioCards
      setCards(data.cards.data.portfolioCards);
      setSkills(data.skills.data.portfolioSkills);
      console.log(data.skills.data.portfolioSkills[1].logo.url);
    }
  }, [data]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;


    if (cards.length > 0) {
      if(isMobile) {
      gsap.from('.card-item', {
        opacity: 0,
        x: 100, 
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'bottom 100%',
          end: '+=4000px', 
          scrub: true,
          markers: true, 
        },
      });
    } else {
      if (isDesktop) {
        gsap.from('.card-item', {
          opacity: 0,
          x: 100,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: '.about-section',
            start: 'bottom 100%', 
            end: '+=1700px',
            scrub: true,
            markers: false,
          },
        });
      } else {
        gsap.from('.card-item', {
          opacity: 0,
          x: 100,
          duration: 1,
          stagger: 0.5, 
          scrollTrigger: {
            trigger: '.about-section',
            start: 'bottom 100%',
            end: '+=2200px',
            scrub: true,
            markers: false,
          },
        });
      }
    }
      
    }
  }, [cards]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  // console.log(skills)
  return (
    <>
      <Navigation />
      <TitleSection />
      <HeaderSection />
      <CardsContext.Provider value={cards}>
        {cards.length > 0 && <CardsContent cards={cards} />}
      </CardsContext.Provider>
      <SkillsContext.Provider value={skills}>
        {skills.length > 0 && <SkillsContent skills={skills} />}
      </SkillsContext.Provider>
    </>
  );
}

export default App;
