import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Max', age: 25},
            {name: 'Manu', age: 27},
            {name: 'Test', age: 24},
        ],
        otherState: 'some state value'
    })

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                {name: 'Venkatesh', age: 25},
                {name: 'Manu', age: 27},
                {name: 'Test', age: 29},
            ],
            otherState: personState.otherState
        })
    }

    return (
        <div className="App">
            <h1>Hi, I am a react App</h1>
            <button onClick={switchNameHandler}>Switch Names</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}>I am custom text</Person>
        </div>
    );


}

export default App;
