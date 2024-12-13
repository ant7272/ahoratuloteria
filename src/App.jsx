import React from "react";
import LotteryCards from "./components/LotteryCards";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center my-6">Resultados de Loteríasde hoy</h1>
      <LotteryCards />
    </div>
  );
}

export default App;
