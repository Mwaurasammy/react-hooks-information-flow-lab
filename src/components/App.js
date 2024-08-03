import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function onDarkModeClick() {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  
  const itemsToDisplay = itemData.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={itemsToDisplay} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
