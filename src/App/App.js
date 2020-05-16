import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
  state = {
    mushrooms: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  render() {
    const mushrooms = this.state;

    return (
      <div className="App">
        <h1>BASKET</h1>
        <button className="btn btn-dark">Pick A Mushroom</button>
        <h1>FOREST</h1>
        <Forest mushrooms={mushrooms.mushrooms}/>
      </div>
    );
  }
}

export default App;
