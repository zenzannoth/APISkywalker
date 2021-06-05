import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button'

function Skywalker(props) {
    const category = ["people","planets", "films", "species", "vehicles", "starships"]
    const [resource, setResource] = useState([]);
    const [id, setId] = useState("");

    useEffect (() => {
        axios.get("https://swapi.dev/api/people/1")  //axios.get(`https://swapi.dev/api/ ${ choice } // ${ id }`)
            .then((response) => {
                console.log(response.data.results);
                setResource(response.data);
            })
    }, []);

    return (
        <div className="selection">
            <form>
                {/* <DropdownButton id="dropdown-basic-button">
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </DropdownButton> */}
                <label for="cat">Search for:</label>
                <input id="cat" className="search" type="text"/>
                <label for="id">ID:</label>
                <input id="id" className="findID" type="text" />
                <Button variant="primary">Search</Button>{' '}
            </form>
            
                <>
                    {
                        <hi>{ resource.name }</hi>
                    }
                </>
            
        </div>
    );
}

export default Skywalker;