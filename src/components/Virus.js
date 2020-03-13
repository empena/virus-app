import React from 'react';
import { Statistic, Button, Icon } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import VirusForm from './VirusForm';



class Virus extends React.Component {

  state = { editing: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    return (
      <div>
        {
          this.state.editing ?
            <VirusForm {...this.props} toggleEdit={this.toggleEdit} addVirus={this.addVirus} />
            :
            <Card>
              <Card.Content header={this.props.name} />
              <Card.Content description={this.props.description} />
              <Card.Content extra>
                <Statistic>
                  <Statistic.Value>{this.props.statisticValue}</Statistic.Value>
                  <Statistic.Label>{this.props.statisticLabel}</Statistic.Label>
                </Statistic>
                <br/>
                <Button icon color="blue" onClick={this.toggleEdit}>
                  <Icon name="edit" />
                </Button>
                <Button icon color="red">
                  <Icon name="delete" />
                </Button>
              </Card.Content>
            </Card>
        }
        < br />
      </div>
    )
  }
}


export default Virus;

