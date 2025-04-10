import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>TODO</h1>
      </header>
      <article id='todo'>
        <Todo />
      </article>
      <footer>
        <p>Lukács Alexandra</p>
      </footer>
    </div>
  );
}

export default App;
