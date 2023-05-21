import React from 'react';
import { useLocation } from 'react-router-dom';

function CardDetailsPage() {
  const location = useLocation();
  const { card } = location.state;

  return (
    <div>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      {/* Display other details of the selected card */}
    </div>
  );
}

export default CardDetailsPage;
