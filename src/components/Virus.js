import React from 'react'
import { Statistic, Button } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


class Virus extends React.Component {

  state = { editing: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    return (
      <div>
        <Card>
          <Card.Content header={this.props.name} />
          <Card.Content description={this.props.description} />
          <Card.Content extra>
            <Statistic>
              <Statistic.Value>{this.props.statisticValue}</Statistic.Value>
              <Statistic.Label>{this.props.statisticLabel}</Statistic.Label>
            </Statistic>
            <Button icon color="blue" onClick={this.toggleEdit}>EDIT</Button>
            <Button icon color="red">DELETE</Button>
          </Card.Content>
        </Card>
        < br />
      </div>
    )
  }
}


export default Virus;