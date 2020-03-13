import React from 'react';
import Virus from './Virus';
import VirusForm from './VirusForm'

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
  };

  getId = () => {
    return Math.floor((1+Math.random()) * 10000);
  };

  addVirus = (virusData) => {
    let virus = { id: this.getId (), ...virusData};
    this.setState({ viruses: [virus, ...this.state.viruses]})
  }
  //form
  
  mapViruses = () => {
    return this.state.viruses.map( virus => (
      // console.log('inside map')
      <Virus key={virus.id} virus={virus} {...virus} />
    ))
  };


  render() {
    return (
      <>
      <h1>Viruses</h1>
      <h2>Add a New Virus:</h2>
      <VirusForm addVirus={this.addVirus} /> < br/>
      <h2>All Viruses:</h2>
      <div> {this.mapViruses()}</div>
      </>
    )
  }
};

export default Viruses;