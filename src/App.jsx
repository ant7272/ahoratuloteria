import React from "react";
import LotteryCards from "./components/LotteryCards";

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="text-3x1 font-bold text-center my-6 text-sky-700">Resultados de Loterias</h1>
      <LotteryCards />
    </div>
  );
}

export default App;
