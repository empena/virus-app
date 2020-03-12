import React from 'react'
import { Statistic } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


const Virus = ({ name, description, statisticValue, statisticLabel }) => (
  <div>
  <Card>
    <Card.Content header={name} />
    <Card.Content description={description} />
    <Card.Content extra>
      <Statistic>
        <Statistic.Value>{statisticValue}</Statistic.Value>
        <Statistic.Label>{statisticLabel}</Statistic.Label>
      </Statistic>
    </Card.Content>
  </Card>
  < br/>
  </div>
);

export default Virus;