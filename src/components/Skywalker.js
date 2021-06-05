import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import '../App.css';

function Skywalker(props) {
    const category = ["people","planets", "films", "species", "vehicles", "starships"]
    const [resource, setResource] = useState("people");
    const [id, setId] = useState("1");
    const [route, setRoute] = "";

    const createRoute = (e) =>{
        
            setResource(document.getElementById("cat", e.target.value));
            setId(document.getElementById("id", e.target.value));
            setRoute(`https://swapi.dev/api/${ resource }/${ id }/`);
        return (
            route,
            console.log(route)
        )
    }

    useEffect (() => {
        axios.get(`https://swapi.dev/api/${ resource }/${ id }`)  //axios.get(`https://swapi.dev/api/ ${ choice } // ${ id }`)
            .then((response) => {
                console.log(response.data);
                setResource(resource);
            })
    });

    

    return (
        <>
        <div className="selection">
            <form type="Submit">
                <label for="cat">Search for:</label>
                <select id="cat" className="search">{category.map((option) => <option>{option}</option>)}</select>
                <label for="id">ID:</label>
                <input id="id" className="findID" type="text" />
                <Button onClick={ createRoute }>Search</Button>
            </form>
        </div>
        <div className="results">
                {
                    <h1>{ resource.name }</h1>
                }
        </div>
        <div>
                {
                    <p>Height: { resource.height }</p>
                }
        </div>
       </> 
    );
}

export default Skywalker;

// saving as backup
            // <form type="Submit">
            //     <label for="cat">Search for:</label>
            //     <select id="cat" className="search" onSubmit={ (e) => setResource(e.target.value) }>{category.map((option) => <option>{option}</option>)}</select>
            //     <label for="id">ID:</label>
            //     <input id="id" className="findID" type="text" onSubmit={ (e) => setId(e.target.value)}  />
            //     <Button onClick={ createRoute }>Search</Button>
            // </form>