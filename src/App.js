import { useEffect, useState } from 'react';
import './App.css';
import user1 from './user.jpg'
import user2 from './user-2.jpg'
import user3 from './user-3.jpg'
import UserCard from './UserCard';


function Mapping(props) {
  return (
    <h2>{props.movie}</h2>
  );
}


const favMovies = ['spiderman', 'X-men', 'Transformers'];

function RenderMovies() {
  return (
    favMovies.map(movie =>
      Mapping(movie={movie})
    )
  );
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    setCounter(100)
  }, [])

  return (
    <div className='counter'>
    <button onClick={() => setCounter(prevCounter => prevCounter -1)}>-</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(prevCounter => prevCounter +1)}>+</button>
    </div>
   
  );
}

function App() {
  let hello = true;
  return (
    <div className="App">
     <Counter/>
     <UserCard image={user1} name='Mary Misiga'/>
     <UserCard image={user2} name='Okindo Misiga'/>

     {
      hello ? <UserCard image={user3} name='Silva Misiga'/> : console.log('user not found')
     }
  
     <RenderMovies/>
    </div>
  );
}

export default App;
