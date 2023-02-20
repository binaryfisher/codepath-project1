import './App.css';
import Cards from './components/Cards';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <img src='https://heroic-pixie-6d7f91.netlify.app/awning.png'/>
        <h1>Food truck favorites</h1>
      </div>
        
      <Cards/>
      
    </div>
  )
}

export default App