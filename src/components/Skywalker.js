import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import '../App.css';

const Skywalker = ({setResult}) => {
    const category = ["people","planets", "films", "species", "vehicles", "starships"]
    const [resource, setResource] = useState("");
    const [id, setId] = useState("");
    var docs = "";

    const createRoute = (e) =>{
        e.preventDefault();
        
        axios.get(`https://swapi.dev/api/${ resource }/${ id }`)  //axios.get(`https://swapi.dev/api/ ${ choice } // ${ id }`)
            .then((response) => {
                // console.log(response.data);
                setResource(document.getElementById("cat", e.target.value));
                setId(document.getElementById("id", e.target.value));
                docs = (response.data);
                console.log(docs.name);
                console.log(response.data.name);
            })       
    }
    return (
        <>
        <div className="selection">
        <form type="Submit" onSubmit={createRoute}>
                <label for="cat">Search for:</label>
                <select id="cat" className="search" onChange={ (e) => setResource(e.target.value) }>{category.map((option) => <option>{option}</option>)}</select>
                <label for="id">ID:</label>
                <input id="id" className="findID" type="text" onChange={ (e) => setId(e.target.value)}  />
                <Button type="submit" onSubmit={ createRoute }>Search</Button>
            </form>
        </div>
        <div className="results">
                {
                    <h1>{ docs.name }</h1>
                }
        </div>
        <div>
                {
                    <p>Height: { docs.height }</p>
                }
        </div>
       </> 
    );
}


export default Skywalker;