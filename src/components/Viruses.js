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
        editing: false,
      },
      {
        id: 2,
        name: "Flu",
        description: 'owthwofkwpkfoiwlermgle',
        statisticValue: 1000,
        statisticLabel: 'People Dead',
        editing: false,
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

  editVirus = (virusData) => {
    const viruses = this.state.viruses.map( virus => {
      if (virus.id === virusData.id)
        return virusData;
      return virus
    });
    this.setState({ viruses, });
  }
  
  mapViruses = () => {
    return this.state.viruses.map( virus => (
      // console.log('inside map')
      <Virus key={virus.id} virus={virus} {...virus} editVirus={this.editVirus} toggleEdit={this.toggleEdit} />
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