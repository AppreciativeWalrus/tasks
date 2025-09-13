import React from "react";
import {Button, Col, Container, Row} from 'react-bootstrap';
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>A heading is required! Smiley Face.</h1>
            <img src="./Ginger.png" alt="A picture of a magical mouse i drew"/>
            <ul>
                <li><p>Thats a picture of Ginger Root!</p></li>
                <li><p>It was cursed to turn into a tree</p></li>
                <li><p>Its kinda mad about that now</p></li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Isabel L. Hello World!
            </p>

            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            <div>
                <Container>
                    <Row>
                        <Col style={ {backgroundColor: 'red', width: '200px', height: '80px'} }>First column.</Col>
                        <Col style={ {backgroundColor: 'red', width: '240px', height: '160px'} }>
                            Dink Donk
                        </Col>
                        <Col style={ {backgroundColor: 'red', width: '280px', height: '240px'} }>
                            Ok so i need a third column, clearly.
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
