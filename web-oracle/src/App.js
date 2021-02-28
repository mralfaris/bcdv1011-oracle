import './App.css';
import React from "react";
import config from './config';
import Web3 from 'web3';

class App extends React.Component {

  state = {
    price: 0,
    volume: 0 
  }

  clickHandler = async (e, action) => {
    e.preventDefault();
  
    let web3 = new Web3(new Web3.providers.HttpProvider(config.providerURL));
    let contractInstance = new web3.eth.Contract(config.abi, config.contractAddress);
    let testSymbol = "0x41424345";

    let ownerAccount = "";

    web3.eth.getAccounts((error, accounts) => {
			console.log(error, accounts);
      ownerAccount = accounts[0];
		});
  
    if (action === 'Set') {
      let result = await fetch("http://localhost:8000/stock");  
      let json = await result.json();
      contractInstance.methods.setStock(testSymbol, Math.floor(json.price), json.volume)
      .send({ from: ownerAccount }).then(
        val => console.log('Stock price: ', val)
      );
    
    } else if (action === 'GetStockP') {
      contractInstance.methods.getStockPrice(testSymbol)
      .call({ from: ownerAccount }).then(
        val => { 
          console.log('Stock price: ', val);
          this.setState({
            price: val
          });
        }
      );
  
    } else if (action === 'GetStockV') {
      contractInstance.methods.getStockVolume(testSymbol)
      .call({ from: ownerAccount }).then(
        val => {
          console.log('Stock volume: ', val);
          this.setState({
            volume: val
          });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <center>
          <table>
            <tr>
              <td><button onClick={(event) => this.clickHandler(event, 'Set')}>Set Stock</button></td>
            </tr>
            <tr>
              <td><button onClick={(event) => this.clickHandler(event, 'GetStockP')}>Get Stock Price</button></td>
              <td><strong>{this.state.price}</strong></td>
            </tr>
            <tr>
              <td><button onClick={(event) => this.clickHandler(event, 'GetStockV')}>Get Stock Volume</button></td>
              <td><strong>{this.state.volume}</strong></td>
            </tr>
          </table>
        </center>
    </div>
    );
  }
}

export default App;