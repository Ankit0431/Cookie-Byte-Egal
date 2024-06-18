import { addDoc } from "firebase/firestore";
import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, item: "Karjat", checked: false },
    { id: 2, item: "Dombivili", checked: true },
    { id: 3, item: "Kandivili", checked: false },
  ]);

  const [search, setSearch] = useState("");

  const handleCheck = (id) => {
    // Toggle the checked state of the item
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);

    // Get the current location coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="todo-container p-6">
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={filteredItems} handleCheck={handleCheck} />
    </section>
  );
};

const Content = ({ items, handleCheck }) => {
  return (
    <>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} />
      ) : (
        <p className="mt-8 text-center text-gray-600">Your list is empty.</p>
      )}
    </>
  );
};

const ItemList = ({ items, handleCheck }) => {
  return (
    <ul className="w-full">
      {items.map((item) => (
        <LineItem key={item.id} item={item} handleCheck={handleCheck} />
      ))}
    </ul>
  );
};

const LineItem = ({ item, handleCheck }) => {
  return (
    <li className="item flex items-center py-2 px-4 mb-2 bg-gray-100 rounded">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
        className="w-8 h-8 mr-2 cursor-pointer"
      />
      <label
        className={item.checked ? "line-through flex-grow" : "flex-grow"}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
    </li>
  );
};

const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="searchForm flex items-center mt-4 mb-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-grow min-h-[48px] rounded-l-md px-2 py-1 text-sm outline-none"
      />
    </form>
  );
};

export default TodoList;
