import './App.css';
import { Display } from './component/Display';
import { SearchForm } from './component/SearchForm';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Know Your Comic Character</h1>
          </div>
        </div>
        <hr />

        <SearchForm />
        <Display />
      </div>
    </div>
  );
}

export default App;
