import React, { Component } from 'react';
import TBody from './TBody';
const captionStyles = {'captionSide': 'top'},cursor={'cursor':'pointer'}
export default class App extends Component {
  constructor(){
    super()
    this.state={
      top30days:[],
      topAllTime:[],
      current:"true",
    }
  }
componentDidMount(){
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(res => res.json()).then(data => this.setState({ top30days: data }));
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(res => res.json()).then(data => this.setState({ topAllTime:data}));
  }
  changeCurrent(e){
    if(e.target.id=="30days"){
      this.setState({current:true});
    }else{
      this.setState({current:false});
    }
  }
  render() {
    return (
      <div className="app container"> 
        <table className="table table-bordered table-striped table-light table-hover table-responsive-sm" >
          <caption className="bg-success text-white text-center lead" style={captionStyles}>FreeCodeCamp Camper Leaderboard</caption>
          <thead className="thead-light"> 
            <tr>
              <th scope="col">#</th>
              <th scope="col">Camper name</th>
              <th scope="col" id="30days" onClick={this.changeCurrent.bind(this)} style={cursor}>Points in last 30 days{this.state.current?'*':''}</th>
              <th scope="col" id="alltime" onClick={this.changeCurrent.bind(this)} style={cursor}>All time points{!this.state.current ? '*' : ''}</th>
            </tr>
          </thead>
          <TBody statex={this.state}/>
        </table>
      </div>
    )
  }
}
