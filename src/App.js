import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MyCard from './components/card';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <MyCard text="Main" header="Main" content="Now we're in the main page" />
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <MyCard text="Main" header="Bubblegum" content="This is the bubblegum route" />
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <MyCard text="Main" header="Shoelaces" content="Hey! We're in the shoelaces route!" />
  }
]

const state = {
  first: 'Yoni',
  last: 'Fraimorice',
  id: 1,
  selectedPath: '/'
}

class App extends Component {
  componentWillMount = () => {
    this.setState(state);
  }

  hello = (path) => {
    console.log(path);
  }

  render() {
    console.log(this);
    return (
      < Router >
        <div style={{ display: 'flex' }}>
          <div style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0'
          }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bubblegum">Bubblegum</Link></li>
              <li><Link to="/shoelaces">Shoelaces</Link></li>
            </ul>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router >
    )
  }
}

export default App;
