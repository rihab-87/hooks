import React, { useState } from "react";
import { Modal, Button , Form, Control, Label, Row, Col,Group } from "react-bootstrap";
import MoviesList from './MoviesList.js'
import './addm.css'
const Addm = ({ show, handelclose,moviesData,handelsave,handelchangemv}) => {
// const[ newmovie,setNewmovie]=useState({ title:"",description:"",rate:"",Img:""})
// const[save,setSave]=useState(false)
//   const handelchange=(e)=> {
//   setNewmovie({...newmovie,[e.target.name ]: e.target.value})
//   }
 
  //  const handelsave=()=>{
  //   console.log(newmovie)
  //   setSave(true)
  //    datamovie.push(newmovie)
  //    console.log(datamovie)  
  //  }

  return (
    <>
      <Modal show={show} onHide={handelclose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#8d108d"}}>Adding Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form.Group>
       <Form.Control  className="input-styl" name="title " type="text"placeholder="title movie" onChange={handelchangemv}/>
       <Form.Control   className="input-styl"  name="description"type="text"placeholder="description" onChange={handelchangemv}/>
       <Form.Control className="input-styl" name="rate"type="text" placeholder="Rate" onChange={handelchangemv}/>
       <Form.Control  className="input-styl" name="Img" type="text" placeholder="image Url" onChange={handelchangemv}/>
       </Form.Group>
       <Button  variant="light"style={{backgroundColor:"#8d108d",color:"white"}} onClick={handelsave}>Save </Button>
       
       {/* {save?<MoviesList  data={datamovie} />:null} */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"  onClick={handelclose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> 
      

    </>
  );
};

export default Addm;
