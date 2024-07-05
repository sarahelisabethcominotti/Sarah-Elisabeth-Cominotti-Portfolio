import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { CARDS_API, getAllCards } from "./CARDS_API";
import CardsContent from "./components/CardsContent";
import { createContext, useEffect, useState } from "react";


export const CardsContext = createContext();
// const initalCards = null
function App() {
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
      <h1>Hi, I'm Sarah Elisabeth Cominotti. Welcome to my porfolio</h1>
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
