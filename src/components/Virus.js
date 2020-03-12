import React from 'react'
import { Statistic } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


const Virus = (props) => (
  <Card>
    <Card.Content header={props.name} />
    <Card.Content description={props.description} />
    <Card.Content extra>
      <Statistic>
        <Statistic.Value>{props.statisticValue}</Statistic.Value>
        <Statistic.Label>{props.statisticLabel}</Statistic.Label>
      </Statistic>
    </Card.Content>
  </Card>
);

export default Virus;