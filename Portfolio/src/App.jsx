import './App.css'
import { useQuery } from "@tanstack/react-query";
import {CARDS_API, getAllCards} from './CARDS_API'

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
          query: getAllCards
        }),
      });
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
console.log(data)

  return (
    <>
      <h1>Vite + React</h1>
      <div>
      <h1>Cars</h1>
      {JSON.stringify(data)}
    </div>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
