
import './App.css';
import { useState } from "react"
import SingleCard from './components/SingleCard';


const cardImages = [
  {"src": "/img/Lettre-A.png"},
  {"src": "/img/Lettre-B.png"},
  {"src": "/img/Lettre-C.png"},
  {"src": "/img/Lettre-D.png"},
  {"src": "/img/Lettre-E.png"},
  {"src": "/img/Lettre-F.png"}

]

function App() {
  const [ cards, setCards ] = useState([]);
  const [ turns, setTurns ] = useState(0);

  // shuffle card

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards);
    setTurns(0);
  }

console.log(cards, turns);

  return (
    <div className="App">
    <h1>Magic memory</h1>
    <button onClick={shuffleCards}>New game</button>
    
    <div className='card-grid'>
      {cards.map(card => (
        <SingleCard key={card.id} card={card}/>
        
      ))}

    </div>

    </div>
  );
}

export default App;
