import { Button,Form,Link,Nav,Navbar,FormControl} from 'react-bootstrap';
import React,{useState} from 'react';
import StarRatingComponent from 'react-star-rating-component'
// import MoviesList from './components/MoviesList'
import Addm from './addm'
// import Rate from './components/Rate'
import Search from './search'
const Navbarmv = ({handelhome,handeladd,add,handelclose,moviesData, MoviesList, handelsave,handelchangemv,handlchange}) => {
  const[ratingempty,setRatingempty]=useState(0);
   const onStarClickEmptyInitial=(nextValue, prevValue, name)=>{
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    setRatingempty ( nextValue);

   }
    return (
        <div>
       <nav className="navbar navbar-expand-sm bg-light nav-pos ">
        
        <a class="navbar-brand" href="#">
       <img src="movie.svg" alt="Logo" style={{width:"40px"}}/> <h3 className="styl-logo" >APP</h3> 
        </a>
        <ul className="navbar-nav ">
        <li className="nav-item"> <a  className="nav-link styl-link" href="#" onClick={handelhome} >All movies</a></li>
        <li className="nav-item"> <a   className="nav-link  styl-link" href="#" onClick={handeladd} >Add movie</a> </li>
        <Addm show={add} handelclose={handelclose} moviesData={moviesData} handelsave={handelsave}  handelchangemv={handelchangemv}/>

        </ul>
        <span  className="navbar-text" style={{fontSize: 24}}>
          <StarRatingComponent
            name="app5"
            value={ratingempty}
            onStarClick={onStarClickEmptyInitial} /> </span>
        <Search handlchange={handlchange}/>
      
      </nav>

        </div>
    );
}

export default Navbarmv;
