import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider as AlertProvider } from 'react-alert'; 
import AlertTemplate from 'react-alert-template-basic'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const options = {
  position: 'top center', 
  timeout: 5000, 
  offset: '30px', 
  transition: 'scale'
}

class Root extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options} > 
        <App />
      </AlertProvider>
    ) 
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
