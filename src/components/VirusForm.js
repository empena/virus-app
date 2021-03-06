import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

class VirusForm extends React.Component {

  state = {
    name: "",
    description: "",
    statisticValue: 0,
    statisticLabel: "",
  };

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name, description: this.props.description, statisticValue: this.props.statisticValue, statisticLabel: this.props.statisticLabel, });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editVirus({ id: this.props.id, ...this.state });
      this.props.toggleEdit()
    } else {
      this.props.addVirus(this.state);
    }
    this.setState({ name: "", description: "", statisticValue: 0, statisticLabel: "", });
  }

  render() {
    return (
      
      <Form onSubmit={this.handleSubmit}>
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
        <Button type='submit' color="blue">Submit</Button>
      </Form>
    )
  };
};


export default VirusForm;