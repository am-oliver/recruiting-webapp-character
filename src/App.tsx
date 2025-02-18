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
        <CharacterSheet></CharacterSheet>
      </section>
    </div>
  );
}

function CharacterSheet() {
  var attrs = {}
  ATTRIBUTE_LIST.forEach(attr => attrs[attr] = 0)
  const [attributes, setAttributes] = useState(attrs)

  // idk if attributes can be negative?
  function handleIncrement(key) {
    const copy = attributes
    copy[key] += 1
    setAttributes({ ...copy })
  }
  function handleDecrement(key) {
    const copy = attributes
    copy[key] -= 1
    setAttributes({ ...copy });
  }

  let displayAttributes = []
  for (let key in attributes) {
    displayAttributes.push(<Attribute
      key={key}
      attr={key}
      value={attributes[key]}
      onIncrement={() => handleIncrement(key)}
      onDecrement={() => handleDecrement(key)}
    ></Attribute>)
  }

  return (
    <>
      <section>
        <ul>{displayAttributes}</ul>
      </section>
      <section>
        <ClassList></ClassList>
      </section>
    </>
  )
}

function Attribute({ attr, value, onIncrement, onDecrement }) {
  return (
    <div>{attr}:
      {value}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

function Class({ name }) {
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
      <Class name="Bard test"></Class>
    </div>
  )
}

export default App;
