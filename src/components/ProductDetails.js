import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Fetch specific card data based on the ID
    const fetchCardData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, [id]);

  if (!cardData) {
    return <div>You cannot select any card yet!</div>;
  }

  //console.log(cardData);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
        <div className='imageDiv'>
        <img src={cardData.image} alt='fullImage' className='imageDetails'/>
        </div><br></br>
        </div>

        <div className='col-sm-6'>
          <div className='detailsDiv'>
            <div className='cardTitle'>
            <h3>{cardData.title}</h3>
            </div>
            <p>{cardData.description}</p>
            <h4 className='title'>Price: ${cardData.price}</h4>
            <div className='buttons'>
            <button className='btn btn-primary'>Buy Now</button>
            <Link to='/'>
            <button className='btn btn-warning'>Back</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
