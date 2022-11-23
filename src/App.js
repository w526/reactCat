
import './App.css';
import './components/KittyOfTheDay'
import KittyOfTheDay from './components/KittyOfTheDay';



function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1>Here is a picture of a cat to cheer you up</h1>
      <KittyOfTheDay/>
      <div className="divButton">
        <button type="button" onClick={refreshPage}>I'm still feeling down, make my day even better</button>
        </div>
    </div>
    
    
  );
}

export default App;

