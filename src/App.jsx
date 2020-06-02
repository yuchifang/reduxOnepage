import React, { Component } from "react";
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer.jsx'
class App extends Component {
    render() {
      return (
          <Provider store={store} >
            <div className="App">
              <CakeContainer/>
            </div>
          </Provider>
      );
    }
  }
  
  export default App

  