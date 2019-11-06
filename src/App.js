import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { fetchAllCustomers } from './store/customers/actions'
import { fetchAllTeetimes } from './store/teetimes/actions'

const styles = {
  noPadding: {
    padding: 0,
  },
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCustomers)
    this.props.dispatch(fetchAllTeetimes)
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
