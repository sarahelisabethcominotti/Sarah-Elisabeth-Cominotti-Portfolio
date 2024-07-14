import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <h1>&#123; <span id="text-container"></span> &#125;</h1>
    <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
    culpa duis.</p>
        <App />
    </QueryClientProvider>
  </React.StrictMode>
);
