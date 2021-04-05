import React from 'react';
import { } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import'./rate.css'
const Rate = ({onStarClick,rating}) => {
    return (
        <>
        <div  className="nav-link star-box ">
          <StarRatingComponent
            name="app5"
            value={rating}
            onStarClick={onStarClick} 
            emptyStarColor={'#8d108d'}/>
        </div>
      </>
    );
}

export default Rate;
