import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  render() {
    const { mushrooms } = this.state;
    const { basket } = this.state;

    return (
      <div className="App">
        <h1>BASKET</h1>
        <Basket basket={basket}/>
        <button className="btn btn-dark">Pick A Mushroom</button>
        <h1>FOREST</h1>
        <Forest mushrooms={mushrooms}/>
      </div>
    );
  }
}

export default App;
