import React,  { Component } from "react";
import API from "../utils/API";

class Search extends Component {
    state={
        users: [{}]

    }

    componentDidMount(){

   
    API.getEmployee()
      .then(res => {
          console.log (res.data.results)

        this.setState({
            users: res.data.results
        })
      })
      .catch(err => console.log(err));
  }

  
render(){


  return (
    <div>
      Hello Hello
    </div>
  )
}}

export default Search;
