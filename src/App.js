import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App container mx-auto px-4">
      {/* Example: Hero Section */}
      <header className="bg-blue-500 text-white p-4 md:p-8 lg:p-12 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Welcome to OceanBites 2025
        </h1>
        <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-lg">
          Fresh seafood delivered to your doorstep.
        </p>
      </header>

      {/* Example: Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow rounded-lg p-4">
          <img src="/fish_fry.jpeg" alt="Fish Fry" className="w-full h-auto rounded" />
          <h2 className="text-lg font-semibold mt-2">Fish Fry</h2>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow rounded-lg p-4">
          <img src="/fish_burger.jpeg" alt="Fish Burger" className="w-full h-auto rounded" />
          <h2 className="text-lg font-semibold mt-2">Fish Burger</h2>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow rounded-lg p-4">
          <img src="/fish_cutlet.jpeg" alt="Fish Cutlet" className="w-full h-auto rounded" />
          <h2 className="text-lg font-semibold mt-2">Fish Cutlet</h2>
        </div>
      </section>

      {/* Example: Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>© 2025 OceanBites. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
