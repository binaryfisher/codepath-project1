import './App.css';
import Cards from './components/Cards';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <img src='https://img.freepik.com/free-vector/designed-travel-label-new-york_1284-38825.jpg?w=2000'/>
        <h1> Must Visit Places in New York City</h1>
      </div>
        
      <Cards/>
      
    </div>
  )
}

export default App