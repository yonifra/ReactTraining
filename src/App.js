import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './components/card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyCard header="Card Header" content="Some content here" />
        </header>
      </div >
    );
  }
}

export default App;
