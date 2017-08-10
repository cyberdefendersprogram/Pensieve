import React, { Component } from 'react';
import './App.css';
// import Web3 from 'web3'
// import _ from 'lodash'

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

// need abi and address for our contract
var peopleContractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"username","type":"bytes32"},{"name":"password","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"}]
var peopleContractAddress = '0xbf6a783b7c675bf1f11eb0af9d833db040d46776'

var peopleContract = ETHEREUM_CLIENT.eth.contract(peopleContractABI).at(peopleContractAddress)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usernames: [],
      passwords: []
    }
  }
  componentWillMount() { // called right before the program is rendered to the screen
    var data = peopleContract.getPeople()
    this.setState ({
      usernames: String(data[0]).split(','),
      passwords: String(data[1]).split(',')
    })
  }

  render() {
    var TableRows = []

    _.each(this.state.usernames, (value, index) => {
        TableRows.push(
          <tr>
            <td>{ETHEREUM_CLIENT.toAscii(this.state.usernames[index]).replace(/\u0000/g, '')}</td>
            <td>{ETHEREUM_CLIENT.toAscii(this.state.passwords[index]).replace(/\u0000/g, '')}</td>
          </tr>
        )
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-Content">
          <table>
            <thead>
              <tr>
                <th>Usernames</th>
                <th>Passwords</th>
              </tr>
            </thead>
            <tbody>
              {TableRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Ether;