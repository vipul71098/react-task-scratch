import logo from './logo.svg';
import './App.css';
import Input from './component/Input';
import Display from './component/Display';
import store from './store/'
function App() {
  return (
    <div className="App">
      <h1>React Redux Task</h1>
      <Input store={store} />
      <Display  />
    </div>
  );
}

export default App;
