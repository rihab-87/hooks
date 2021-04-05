  import React from 'react'
  
  import { Card } from 'react-bootstrap';
  import'./moviecard.css'
  import StarRatingComponent from 'react-star-rating-component';
  import {far} from 'font-awesome-icons';
 export default function movieCard({movie}) {
    return (
        
 <Card style={{ width: '18rem',marginTop:'30px',height:'550px' }} className="card-style">
  <Card.Img variant="top" src={movie.Img}  style={{ height: '320px' }}/>
 <Card.Body>
   <Card.Title style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "large",fontWeight: 700,
      textAlign: "center"}}>{movie.title}</Card.Title>
   <Card.Text style={{ fontFamily:"'Times New Roman', Times, serif",fontSize: "medium",fontWeight: 500,
      textAlign: "center"}}>
    {movie.description}
  </Card.Text>
  <Card.Text>
  <div style={{fontSize: 20 ,textAlign:"center"}}>
          <StarRatingComponent
            name="app4"
            editing={false}
            starCount={5}
            value={movie.rate} />
    </div>
  </Card.Text>
  </Card.Body>
</Card> 
             )
 }
// import React from 'react'

// const movieCard = ({movie}) => {
//     return (
//         <div>
//             <h1>{movie.title}</h1>
//             <h2>{movie.description}</h2>
//             <img src={movie.Img}   alt={movie.description}/>
//         </div>
//     )
// }

// export default movieCard
