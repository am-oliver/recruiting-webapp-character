import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="Character-sheet">
          <AttributeList></AttributeList>
          <ClassList></ClassList>
      </section>
    </div>
  );
}

function Attribute({attr}) {
  const [value, setValue] = useState(0)
  function increment(){
    setValue(value+1);
  }
  function decrement() {
    setValue(value-1);
  }
  return (
    <div>{attr}:
     {value} 
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
    </div>
  )
}

function AttributeList() {
  const attrs = ATTRIBUTE_LIST.map(attr =>
    <Attribute key={attr} attr={attr}></Attribute>
  );
  return (
    <div>
      <header>
        <h3>Attributes</h3>
      </header>
      {attrs}
    </div>
  )
}

function Class({name}) {
return (
  <div>{name}</div>
)
}

function ClassList() {
  return (
    <div>
      <header>
        <h3>Classes</h3>
      </header>
      <Class name="Barbarian"></Class>
      <Class name="Wizard"></Class>
      <Class name="Bard"></Class>
    </div>
  )
}

function CharacterSheet() {
  
}

export default App;
