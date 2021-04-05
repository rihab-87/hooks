import { Card , Row, Col,Container} from 'react-bootstrap';
import MovieCard from './movieCard'
const MoviesList = ({data}) => {
  console.log(data)
    return (
             
  //   <Container  className="fluid" >    
  //     {/* {data.map( el => <MovieCard movie={el}/>)} */}
  //  {data.map((mvCard,idx) => <Col lg="4" className="col-pad"><MovieCard title={mvCard.title} description={mvCard.description} img={mvCard.Img}/> </Col>)}
  //   </Container>

  <Container  style={{marginTop:"170px"}} className="fluid">
       <Row>
  
    {data.map((mvCard,idx) =><Col lg="4"  style={{display:"flex",justifyContent:"center"}}className="col-pad"> <MovieCard movie={mvCard}/>  </Col>)}
       </Row>
    </Container>
   
    )
}

export default MoviesList
