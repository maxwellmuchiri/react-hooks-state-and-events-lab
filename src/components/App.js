
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  // State variable to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggles the state of the dark mode when the button is clicked
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Dynamically sets the class name based on the state of dark mode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;