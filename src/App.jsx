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
import { INFO_API, getAllInfo } from "./INFO_API";
import HeaderSection from "./components/AboutMeSection";
import Navigation from "./components/Navigation";
import TitleSection from "./components/TitleSection";
import ThreeScene from "./components/ThreeScene";
import ContactForm from "./components/ContactFrom";
import SocialBar from "./components/SocialBar";
// import { create } from "@mui/material/styles/createTransitions";

export const CardsContext = createContext();
export const SkillsContext = createContext();
export const InfoContext = createContext()
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
  const [info, setInfo] = useState([]);
  // const [dataSet, setDataSet] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const [cardsRes, skillsRes, infoRes] = await Promise.all([
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
        fetch(INFO_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDgxNzU5MTcsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2x4eDU4M2g3MDR3ajA4dzRrdDB3aHJ0OS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNDk3YjQ5NjEtNjczMy00ZTA1LWJmYzYtNDM1NWQ4MmE5YjQ1IiwianRpIjoiY21iM21zejhxMmsxODA3bW1ldHVtNWs4eCJ9.B90oP-IZerK96CI8Z61JM7e1PGI7HdIGSJbfE3J_UDVtCVF3GQ1SFPe6CXL5ZndA0dN0pDmtDTmqb43-z1zanKOxxRceZGeI1273hpdcHfeFKo4BpcAm6KtQwzQABSv8boB4Eo_pv-LXgyt94pMpldNMZwHISylAIwrS3D1qRZzf9znSJG6x1iF3qWVVaDjfY2WBhBFTqPkCr_WfbgFu2Zl5me5o76cwplhLJpEQNE8ZQtLCwastLU_l8Z12P3Oc1YQbZvOvK3mBjOZudFZN9UD4YZutIRsVzBdfOcX-JJ5oSKEQGVcylbNlqklQBtg-lU-OhrWhYyClbaMJbS9AR1JhqYazoVaO8Io9kxMMWDCvHU1ZBxs5NG6rEGutj3IhSJbkLmV_o8r-DnEaOHykS-cPHYOc9Sy-3DyXzQZ_PkMAwHt7zbqyubJmAYf6Gh0sj4ha_QH5_WtSFX8rrU5pMV2NcegSm87S74uhw8AuV3fUFZn66OndgO5alrBWSqK9TVFlczv0T74TFBbR3JT7dAIjDeYWwmJZ1kYyMg_ewdJ9SA9EHi0nljWD6EYkz_loas8jIu_nUvErLEieUz1S5FtORU2mLXGBWzCykygihH1m--UDsNFOgKVJnBM8ipR9knernZFITHtWCo6UwPX2SJ_KEGfeDL0X9AiUKTU35HE"
          },
          body: JSON.stringify({ query: getAllInfo }),
        }),
      ]);
      if (!infoRes.ok) throw new Error("Failed to fetch info");
      if (!cardsRes.ok) throw new Error("Failed to fetch cards");
      if (!skillsRes.ok) throw new Error("Failed to fetch skills");

      const cards = await cardsRes.json();
      const skills = await skillsRes.json();
      const info = await infoRes.json()
      console.log('asbcs',cards, skills, info)
      return { cards, skills, info };
    },
  });
// console.log(data)
  useEffect(() => {
    if (data) {
      // const cards = data.data.portfolioCards
      setCards(data.cards.data.portfolioCards);
      setSkills(data.skills.data.portfolioSkills);
      // setInfo(data.info.data.generalInfo)
      // console.log(data.skills.data.portfolioSkills[1].logo.url);
    }
  }, [data]);

        // console.log(info)


  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (cards.length > 0) {
      if (isMobile) {
        gsap.from(".card-item", {
          opacity: 0,
          x: 100,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".about-section",
            start: "bottom 100%",
            end: "+=3800px",
            scrub: true,
            markers: false,
          },
        });
      } else {
        if (isDesktop) {
          gsap.from(".card-item", {
            opacity: 0,
            x: 100,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
              trigger: ".title-section",
              start: "bottom 150%",
              end: "+=2500px",
              scrub: true,
              markers: false,
            },
          });
        } else {
          gsap.from(".card-item", {
            opacity: 0,
            x: 100,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
              trigger: ".title-section",
              start: "bottom 130%",
              end: "+=3000px",
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
      <ThreeScene />
      <Navigation />
      <TitleSection />
      <InfoContext.Provider value={info}>
        {/* {info.length > 0 &&  */}
        <HeaderSection info={info}/>

      </InfoContext.Provider>
      <CardsContext.Provider value={cards}>
        {cards.length > 0 && <CardsContent cards={cards} />}
      </CardsContext.Provider>
      <SkillsContext.Provider value={skills}>
        {skills.length > 0 && <SkillsContent skills={skills} />}
      </SkillsContext.Provider>
      <ContactForm />
      <SocialBar/>
    </>
  );
}

export default App;
