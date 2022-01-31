import './App.css';
import Input from './Container/Input/Input';
import Buttons from './Container/Buttons/Buttons';
import Tasks from './Container/Tasks/Tasks';


function App() {
  return (
    <div className="App">
      <header>Список задач</header>
      <Input/>  
      <Buttons/>
      <Tasks/>
    </div>
  );
}

export default App;
