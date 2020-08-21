import React, { Component } from 'react';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css'



export default class Calendars extends Component {
  constructor(props){
    super(props)
    this.state = {
      dates: null
    }
  }

  handleChange = (selectedOption) => {
    console.log(selectedOption)
    this.props.onSelect(selectedOption);
    this.setState({dates:selectedOption})
  
  }


  render() {
    return (
      <div>
        <DateRangePicker
          onSelect={this.handleChange}
          value={this.state.dates}
        />
      </div>
    )
  }
}