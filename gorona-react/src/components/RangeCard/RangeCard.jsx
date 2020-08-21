import React, { Component } from "react";
import  Selects  from "./../Select/Selects"
import  Calendar  from "./../Calendar/Calendar"

export default class RangeCard extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    getOnlyValues(seleccionados){
        var reformattedArray = seleccionados.map(function(obj){ 
          var rObj = {};
          rObj = obj.value;
          return rObj;
       });
       return reformattedArray;
      }
    onChange = (newC) => {
        this.setState({ seleccionados: newC }, function () {
          console.log(this.state)
        });
      }
    handleClick = () => {
        this.setState({mensaje : this.state.seleccionados.label, datesS:this.state.dateStart, datesE:this.state.dateEnd }, function () {  
        })
        
    }
    onSelect = (dates) => {
        this.setState({dateStart: dates.start._d, dateEnd:dates.end._d}, function () { 
          console.log(this.state)
        })
      }

    render(){
        return (
            <div>
                <Selects selected={this.state.seleccionados} multi={false} onChange={this.onChange}/>
                <Calendar onSelect={this.onSelect} />
                <button onClick={this.handleClick}>Hola</button>
                
                <br/>
                {this.state.mensaje}
                <br/>
                
                { this.state.datesE && 
                  new Date(this.state.datesE).toDateString()}
                <br/>
                {this.state.datesS &&
                  new Date(this.state.datesS).toDateString()}
            </div>
        );
    }
}