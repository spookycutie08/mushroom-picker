import React from 'react';
import PropTypes from 'prop-types';
import mushroomShapePropz from '../../helpers/propz/mushroomShape';

import './Basket.scss';
import BasketMushroom from '../Mushroom/BasketMushroom';

class Basket extends React.Component {
  static propTypes = {
    mushroom: mushroomShapePropz.mushroomShape,
    pickAMushroom: PropTypes.func.isRequired,
  }

  pickAMushroom = () => {
    const { pickAMushroom } = this.props;
    pickAMushroom();
  }

  render() {
    const { basket } = this.props;
    const makeBasket = basket.map((singleMushroom) => (
      <BasketMushroom key={`basket-${singleMushroom.id}`} mushroom={singleMushroom}/>
    ));
    return (
      <div className="Basket">
        <div className="button-container">
        <button className="btn btn-dark" onClick={this.pickAMushroom}>Pick A Mushroom</button>
        </div>
        <div className="d-flex row wrap">
        {makeBasket}
        </div>
      </div>
    );
  }
}

export default Basket;
