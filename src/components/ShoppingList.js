import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [textFilter, setTextFilter] = useState("");
  const [newItem, setNewItem] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleTextChange(e) {
    setTextFilter(e.target.value);
  }

  function handelFormSubmit(props) {
    if (props.name !== "") {
      console.log([...newItem, props]);
      setNewItem([...newItem, props]);
    }
  }

  const itemsToDisplay = newItem
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(textFilter.toLowerCase());
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handelFormSubmit} />
      <Filter
        search={textFilter}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleTextChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
