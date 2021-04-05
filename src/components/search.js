import React from 'react';
import { Form , Button, FormControl} from 'react-bootstrap';
import'./search.css'
const search = ({handlchange}) => {
    return (
        <div>
             <Form inline>
    <FormControl  className=" mr-sm-2"type="search" id="search" name="search" placeholder="title of movie" onChange={handlchange} ></FormControl>
    <Button id="search-btn" variant="light" style={{color:"white",backgroundColor:"#8d108d"}}   >Search</Button>

    </Form>
   
        </div>
    );
}

export default search;
