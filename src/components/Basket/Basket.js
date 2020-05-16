import React from 'react';
import './Basket.scss';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {

  render() {
    const { basket } = this.props;
    const makeBasket = basket.map((singleMushroom) => (
      <Mushroom key={singleMushroom.id} mushroom={singleMushroom}/>
    ));
    return (
      <div className="Basket d-flex row wrap">
        {makeBasket}
      </div>
    );
  }
}

export default Basket;
