import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class VirusForm extends React.Component {

  state = {
    name: "",
    description: "",
    statisticValue: 0,
    statisticLabel: '',
  }

  handleChange = (e) => {
    this.setState ({ [e.target.name] : e.target.value })
    console.log('printed')
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Virus Name</label>
          <input
            placeholder='Virus Name' 
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
          placeholder='Description'
          value={this.state.description}
          name='description'
          onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Statistic Value</label>
          <input
          placeholder='Statistic Value'
          value={this.state.statisticValue}
          name='statisticValue'
          onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Statistic Description</label>
          <input
          placeholder='Statistic Description'
          value={this.state.statisticLabel}
          name='statisticLabel'
          onChange={this.handleChange}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}


  export default VirusForm;