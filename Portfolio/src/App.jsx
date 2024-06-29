import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { CARDS_API, getAllCards } from "./CARDS_API";
import CardsContent from "./components/CardsContent";

function App() {
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

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

    // Extract the IDs from the response data
const cardsArray = data.data.portfolioCards

  return (
    <>
      <h1>Vite + React</h1>
      <div></div>
      <div className="card">
        <h1>Cars</h1>
        {JSON.stringify(cardsArray[0].description)}
        {/* <CardsContent data={cardsArray} /> */}
        {/* <ChangeBackground data={filterData[activeTab]} /> */}

      </div>
    </>
  );
}

export default App;
