import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App container mx-auto px-4 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 md:p-10 lg:p-14 rounded-b-2xl shadow-lg">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Welcome to OceanBites 2025
        </h1>
        <p className="mt-3 md:mt-5 text-lg md:text-xl lg:text-2xl opacity-90">
          Fresh seafood delivered to your doorstep, with love from the ocean.
        </p>
      </header>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="w-full bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-2xl overflow-hidden p-5">
          <img src="/fish_fry.jpeg" alt="Fish Fry" className="w-full h-48 object-cover rounded-lg" />
          <h2 className="text-xl font-bold mt-3 text-gray-800">Fish Fry</h2>
          <p className="text-gray-500 text-sm mt-1">Crispy, golden, and perfectly spiced.</p>
        </div>
        <div className="w-full bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-2xl overflow-hidden p-5">
          <img src="/fish_burger.jpeg" alt="Fish Burger" className="w-full h-48 object-cover rounded-lg" />
          <h2 className="text-xl font-bold mt-3 text-gray-800">Fish Burger</h2>
          <p className="text-gray-500 text-sm mt-1">Delicious fish patty with fresh veggies.</p>
        </div>
        <div className="w-full bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-2xl overflow-hidden p-5">
          <img src="/fish_cutlet.jpeg" alt="Fish Cutlet" className="w-full h-48 object-cover rounded-lg" />
          <h2 className="text-xl font-bold mt-3 text-gray-800">Fish Cutlet</h2>
          <p className="text-gray-500 text-sm mt-1">Juicy cutlets with a crispy bite.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 p-6 text-center mt-10 rounded-t-2xl">
        <p className="text-sm">© 2025 OceanBites. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
