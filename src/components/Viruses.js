import React from 'react';
import Virus from './Virus';

class Viruses extends React.Component {

  state = {
    viruses: [
      {
        id: 1,
        name: "Cornovirus",
        description: 'owthwkfnwklrgkrmglermgle',
        statisticValue: 100,
        statisticLabel: 'People Dead',
      },
      {
        id: 2,
        name: "Flu",
        description: 'owthwofkwpkfoiwlermgle',
        statisticValue: 1000,
        statisticLabel: 'People Dead',
      },
    ]
  }
  
  mapViruses = () => {
    this.state.viruses.map( virus =>
      <Virus key={virus.id} virus={virus} {...virus} />
    )
  }


  render () {
    return (
      <>
      <h1>viruses</h1>
      <div> {this.mapViruses()}</div>
      </>
    )
  }
};

export default Viruses;