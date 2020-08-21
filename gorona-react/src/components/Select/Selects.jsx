import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getCountries } from "./../../api";


class Selects extends Component {
  constructor(props) {
    super(props);
    this.state = {    };
  }
    componentDidMount(){
      this.setState({countries:getCountries()})
    }


render(){
const handleChange = (selectedOption) => {
  this.props.onChange(selectedOption);

}

const animatedComponents = makeAnimated();
  return (
    <Select
    
      closeMenuOnSelect={false}
      components={animatedComponents}
      onChange={handleChange}
      defaultValue={this.props.selected}
      isMulti = {this.props.multi}
      options={this.state.countries}
    />
  );
}
}export default Selects;