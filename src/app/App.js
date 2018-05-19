import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../store/actions/homeActions';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.homeActions.fetchStarships();
  }
  renderStarshipsList() {
    return (
      this.props.starships && 
      this.props.starships
      .map((starships) => <li key={starships.name}>{starships.name}</li>)
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          StarWars Starships
        </p>
        <ol> 
          {this.renderStarshipsList()}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => {
  const { starships } = home;
  return { starships }
}  

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(App);
