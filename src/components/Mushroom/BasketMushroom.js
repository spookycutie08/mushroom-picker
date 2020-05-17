import React from 'react';

import './Mushroom.scss';

class BasketMushroom extends React.Component {

  render() {
    const { mushroom } = this.props;

    return (
      <div className="Mushroom col-2">
        <div className="card">
          <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom"/>
          <div className="card-body">
            <h5 className="card-title">{mushroom.name}</h5>
            <p className="card-text">X {mushroom.quantity}</p>
            <p className="card-text">{mushroom.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BasketMushroom;
