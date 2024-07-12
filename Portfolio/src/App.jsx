import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { CARDS_API, getAllCards } from "./CARDS_API";
import CardsContent from "./components/CardsContent";
import { createContext, useEffect, useState } from "react";
import gsap from 'gsap'
import TextPlugin from "gsap/src/TextPlugin";




export const CardsContext = createContext();
// const initalCards = null
function App() {
  gsap.registerPlugin(TextPlugin);

  const textContainer = document.getElementById('text-container');
  const texthello = "Hello, ";
  const textworl = "worl";
  const textname = "I'm Sarah Elisabeth Cominotti";

  function typeText(target, text, delay = 0) {
      return gsap.to(target, {
          text: text,
          duration: text.length * 0.1,
          ease: "none",
          delay: delay
      });
  }

  function deleteTextBackwards(target, text, delay = 0) {
      const timeline = gsap.timeline({ delay: delay });
      // const numChars = texthello.length;

      for (let i = 0; i < 4; i++) {
          timeline.to(target, {
              text: text.substring(0, text.length - i - 1),
              duration: 0.4,
              ease: "none"
          });
      }
      return timeline;
  }

  gsap.timeline()
      .add(typeText(textContainer, texthello + textworl)) // Type the initial part of the text
      .add(deleteTextBackwards(textContainer, texthello + textworl, 0.3)) // Delete "worl" one letter at a time in reverse
      .add(typeText(textContainer, texthello + textname)); // Type the replacement text "I'm Sarah Elisabeth Cominotti"



  const [cards, setCards] = useState([]);


  const { isLoading, error, data } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const res = await fetch(CARDS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: getAllCards,
        }),
      });
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    },
  });

  useEffect(() => {
    if (data){
      // const cards = data.data.portfolioCards
      setCards(data.data.portfolioCards)
    }
  },[data])



// setCards(data)
  // console.log("data", data)
  // console.log("cards", cards)

  // const filteredData = data.data.portfolioCards


  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


 
    // Extract the IDs from the response data
// const cardsArray = data.data.portfolioCards

  return (
    <>
    <CardsContext.Provider value={cards}>
      <div></div>
      <div className="card">
        <h2>Work</h2>
        {/* {JSON.stringify(data)} */}
        {cards.length > 0 && (
          <CardsContent cards={cards} />
        )}
      </div>
      </CardsContext.Provider>
    </>
  );
}

export default App;
