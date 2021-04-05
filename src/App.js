import React, { useState } from "react";
import "./App.css";
import MovieCard from "./components/movieCard";
import MoviesList from "./components/MoviesList";
import Addm from "./components/addm";
import Rate from "./components/Rate";
import Search from "./components/search";
import Navbarmv from "./components/navbarmv";
import { Navbar, Nav, Card, Row, Col, Container } from "react-bootstrap";

function App() {
  var moviesData = [
    { title: "Princess Frog", description: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being.", rate: "4", Img: "https://i.pinimg.com/originals/8b/9e/8c/8b9e8c80fc4929ee384ffd234bc7acb7.jpg",},
    {title: "Frozen", description:" the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter.",rate: "2",Img:"https://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg",},
    {title: "Beauty and the beast",description:"A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",rate: "2",Img:"https://i.pinimg.com/originals/6d/16/2f/6d162f9417d607b0f953010c1764f972.jpg",},
    {title: "Pocahontas",description:"An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth century Virginia.",rate: "1",Img:"https://i.pinimg.com/originals/1c/c6/4c/1cc64c3c7936760675bb4a65cf0ace54.jpg",},
    {title: "Le Roi Lion",description:"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself",rate: "3",Img:"https://i.pinimg.com/originals/8a/c2/32/8ac232bf0c11fe6a93872c006cba374b.jpg",},
    {title: "Snow White",description:"Exiled into the dangerous forest by her wicked stepmother, a princess is rescued by seven dwarf miners who make her part of their household. ",rate: "5",Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdGskD-ZomoftERM1OtE457ersKZJZ2mQDd3RAQWirQYXrZemxLwWRxz_JrjT0ICeNaE&usqp=CAU",},
    {title: "Aladdin",description:"a street urchin in the Arabian city of Agrabah, and his monkey Abu meet Princess Jasmine, who has snuck away from her sheltered life in the palace ",rate: "5",Img: "https://ohmy.disney.com/wp-content/uploads/2014/01/31-aladdin.jpg",},
  ];

  const [affiche, setAffiche] = useState("");
  // filter movies with title
  const [serchmv, setSearchmv] = useState("");
  const [serch, setSearch] = useState(false);
  const handlchange = (e) => {
    setSearchmv(e.target.value);
    setSearch(true);
    setSave(false);
    setAffiche("filtertitle");
    setRating(0);
  };

  const filtermovie = (serchmv) =>
    moviesData.filter((el, idx) =>
      el.title.toUpperCase().includes(serchmv.toUpperCase())
    );
  //  addmovie
  const [add, setAdd] = useState(false);
  const handeladd = () => {
    setAdd(true);
    
  };
  const handelclose = () => setAdd(false);
  const [newmovies, setNewmovies] = useState([]);
  const [newmovie, setNewmovie] = useState({
    title: "",
    description: "",
    rate: "",
    Img: "",
  });
  const [save, setSave] = useState(false);
  const handelchangemv = (e) => {
    setNewmovie({ ...newmovie, [e.target.name]: e.target.value });
  };
  const handelsave = () => {
    setSave(true);
    setAffiche("addmovie");
    setRating(0);
  };
  //  rate filter
  const [rating, setRating] = useState(0);
  const onStarClick = (nextValue) => {
    setRating(nextValue);
    setAffiche("ratefilter");
  };
  const filterrate = (rating) =>moviesData.filter((movie) => movie.rate == rating);
  const pushmovie = (save) => {
    if (save) return moviesData.concat(newmovie);
  };
  // full movies
  const handelhome = () => {
    setAffiche("allmovie");
    setRating(0);
  };
//  mainview
  const mainview = (affiche) => {
    switch (affiche) {
      case "filtertitle":
        return <MoviesList data={filtermovie(serchmv)} />;
        break;
      case "ratefilter":
        return <MoviesList data={filterrate(rating)} />;
        break;
      case "addmovie":
        return <MoviesList data={pushmovie(save)} />;
        break;
      case "allmovie":
        return <MoviesList data={moviesData} />;
      default:
        return <MoviesList data={moviesData} />;
    }
  };

  return (
    <>
      {/* <Navbarmv handelhome={handelhome} handeladd= {handeladd} show={add} handelclose={handelclose} moviesData={moviesData} handelsave={handelsave} handelchangemv={handelchangemv} handlchange={handlchange}/> */}

      <nav className="navbar navbar-expand-sm bg-light nav-pos fixed-top ">
        <a className="navbar-brand" href="#">
          <img src="movie.svg" alt="Logo" style={{ width: "40px" }} />{" "}
          <h3 className="styl-logo">APP</h3>
        </a>
        <ul className="navbar-nav ">
          <li className="nav-item">
            {" "}
            <a className="nav-link styl-link" href="#" onClick={handelhome}>
              All movies
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link  styl-link" href="#" onClick={handeladd}>
              Add movie
            </a>{" "}
          </li>
          <Addm
            show={add}
            handelclose={handelclose}
            moviesData={moviesData}
            handelsave={handelsave}
            handelchangemv={handelchangemv}
          />
         
        </ul>
        <Rate onStarClick={onStarClick} rating={rating} />
        <Search handlchange={handlchange} />
      </nav>

      <div> {mainview(affiche)}</div>
    </>
  );
}

export default App;
