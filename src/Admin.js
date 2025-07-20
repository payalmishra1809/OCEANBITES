import React from "react";
import "./App.css";

function Admin() {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="bg-blue-600 text-white p-4 md:p-6 lg:p-8 rounded-md text-center md:text-left">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Admin Dashboard</h1>
      </header>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p className="text-gray-600 text-sm md:text-base">View and manage recent orders.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Inventory</h2>
          <p className="text-gray-600 text-sm md:text-base">Track stock and product availability.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-gray-600 text-sm md:text-base">Manage user accounts and roles.</p>
        </div>
      </section>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        © 2025 OceanBites Admin Panel.
      </footer>
    </div>
  );
}

export default Admin;
