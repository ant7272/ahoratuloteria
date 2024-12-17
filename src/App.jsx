import React from "react";
import LotteryCards from "./components/LotteryCards";

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center my-6 text-teal-600">Resultados de Loterías</h1>
      <LotteryCards />
    </div>
  );
}

export default App;
