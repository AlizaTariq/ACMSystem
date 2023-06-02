import React, { useState } from "react";

const cards = [
  {
    id: 1,
    name: "John Doe",
    time: "9:00 AM",
    date: "07/11/2020",
    courseName: "React",
  },
  {
    id: 2,
    name: "Jane Doe",
    time: "10:00 AM",
    date: "07/12/2020",
    courseName: "JavaScript",
  },
  {
    id: 3,
    name: "Bob Smith",
    time: "11:00 AM",
    date: "07/13/2020",
    courseName: "HTML",
  },
  {
    id: 4,
    name: "Jack Smith",
    time: "12:00 PM",
    date: "07/14/2020",
    courseName: "CSS",
  },
  {
    id: 5,
    name: "Alex Jones",
    time: "1:00 PM",
    date: "07/15/2020",
    courseName: "Node",
  },
  {
    id: 6,
    name: "Harry Jones",
    time: "2:00 PM",
    date: "07/16/2020",
    courseName: "Vue",
  },
  {
    id: 7,
    name: "Clara Smith",
    time: "3:00 PM",
    date: "07/17/2020",
    courseName: "Angular",
  },
  {
    id: 8,
    name: "Bert Jones",
    time: "4:00 PM",
    date: "07/18/2020",
    courseName: "React Native",
  },
  {
    id: 9,
    name: "John Smith",
    time: "5:00 PM",
    date: "07/19/2020",
    courseName: "Express",
  },
  {
    id: 10,
    name: "Jane Smith",
    time: "6:00 PM",
    date: "07/20/2020",
    courseName: "MongoDB",
  },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    const filteredResults = cards.filter((card) =>
      Object.keys(card).some((key) =>
        card[key].toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredCards(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      {filteredCards.map((card) => (
        <div key={card.id}>
          <h3>ID: {card.id}</h3>
          <h3>Name: {card.name}</h3>
          <h3>Time: {card.time}</h3>
          <h3>Date: {card.date}</h3>
          <h3>Course Name: {card.courseName}</h3>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
