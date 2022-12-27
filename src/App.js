import './App.css';
import Car from './Car';

function App() {
  let myCar = new Car('KIA')
  return (
    <div className="App">
      <h1>{myCar.name} </h1>
    </div>
  );
}

export default App;
