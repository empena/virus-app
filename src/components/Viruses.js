import React from 'react';
import Virus from './Virus';
import VirusForm from './VirusForm'
import { Header, Divider } from "semantic-ui-react";

class Viruses extends React.Component {

  state = {
    viruses: [
      {
        id: 1,
        name: "Cornovirus",
        description: 'Group of viruses that cause diseases in mammals and birds. In humans, coronaviruses cause respiratory tract infections that are typically mild, such as some cases of the common cold.',
        statisticValue: 1080,
        statisticLabel: 'People Dead',
        editing: false,
      },
      {
        id: 2,
        name: "SARS",
        description: 'A contagious and sometimes fatal respiratory illness caused by a coronavirus.',
        statisticValue: 670,
        statisticLabel: 'People Dead',
        editing: false,
      },
      {
        id: 3,
        name: "Influenza A virus",
        description: 'Influenza A virus causes influenza in birds and some mammals, and is the only species of the genus Alphainfluenzavirus of the virus family Orthomyxoviridae.',
        statisticValue: 8540,
        statisticLabel: 'People Dead',
        editing: false,
      },
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addVirus = (virusData) => {
    let virus = { id: this.getId(), ...virusData };
    this.setState({ viruses: [virus, ...this.state.viruses] })
  }

  deleteVirus = (id) => {
    const viruses = this.state.viruses.filter( virus => {
      if (virus.id !== id)
        return virus
    });
    this.setState({ viruses: [...viruses], });
  };

  editVirus = (virusData) => {
    const viruses = this.state.viruses.map(virus => {
      if (virus.id === virusData.id)
        return virusData;
      return virus
    });
    this.setState({ viruses, });
  }

  mapViruses = () => {
    return this.state.viruses.map(virus => (
      // console.log('inside map')
      <Virus key={virus.id} virus={virus} {...virus} editVirus={this.editVirus} addVirus={this.addVirus} deleteVirus={this.deleteVirus}/>
    ))
  };


  render() {
    return (
      <>
        <br/>
        <Header as="h1">Viruses</Header>
        <Header as="h4">Find out more or add viruses.</Header>
        <Divider clearing />
        <br/>
        <h2>Add a New Virus:</h2>
        <VirusForm addVirus={this.addVirus} /> < br />
        <h2>All Viruses:</h2>
        <div> {this.mapViruses()}</div>
      </>
    )
  }
};

export default Viruses;