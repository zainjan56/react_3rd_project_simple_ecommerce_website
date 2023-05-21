import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Practice() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {cardsData.map((card) => (
        <div key={card.id}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <Link to={{ pathname: `/details/${card.id}`, state: { card } }}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Practice;
