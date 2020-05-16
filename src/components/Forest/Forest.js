import React from 'react';
import './Forest.scss';
import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {

  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((singleMushroom) => (
      <Mushroom key={singleMushroom.id} mushroom={singleMushroom}/>
    ));
    return (
      <div className="Forest d-flex row wrap">
        {makeMushrooms}
      </div>
    );
  }
}

export default Forest;
