import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [props, setProps] = useState({ id: 0, name: "", category: "Produce" });
  return (
    <form
      className="NewItem"
      onSubmit={(e) => {
        e.preventDefault();
        onItemFormSubmit({ ...props, id: uuid() });
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={(e) => setProps({ ...props, name: e.target.value })}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={props.category}
          onChange={(e) => setProps({ ...props, category: e.target.value })}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
