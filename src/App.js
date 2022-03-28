import './App.css';
import './Components/Header/Header';
import Header from './Components/Header/Header';
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Shop></Shop>
    </div>
  );
}

export default App;
