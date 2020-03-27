import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar.js"
import Header from "./components/Header.js"
import Dashboard from "./components/Dashboard.js"

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
