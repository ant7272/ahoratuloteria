import React, { useEffect, useState } from "react";

const LotteryCards = () => {
  const [lotteries, setLotteries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  });

  // Fetch lottery results by date
  const fetchData = async (selectedDate) => {
    setLoading(true);
    setError(null);

    try {
      const query = selectedDate ? `?date=${selectedDate}` : "";
      const response = await fetch(`https://listaloteria.fly.dev/${query}`); // Cambia esta URL por la de tu API

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Filtrar datos para eliminar duplicados basados en el atributo "name"
      const uniqueLotteries = data.filter(
        (lottery, index, self) =>
          index === self.findIndex((t) => t.name === lottery.name)
      );

      setLotteries(uniqueLotteries);
    } catch (error) {
      console.error("Error fetching lotteries:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount and when the date changes
  useEffect(() => {
    fetchData(date);
  }, [date]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  if (loading) {
    return <div className="text-center text-xl">Cargando resultados...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4 max-w-5xl mx-auto bg-white min-h-screen">



      <div className="mb-4">
        <label htmlFor="date" className="block text-lg font-medium text-gray-700">
          Buscar por Fecha: 
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="mt-1 block-inline w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {lotteries.map((lottery, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-3x1 font-bold text-teal-600 mb-2">{lottery.name}</h2>
            <p className="text-gray-700">
              <span className="font-medium">Fecha:</span> {lottery.date}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Números:</span> {lottery.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LotteryCards;
