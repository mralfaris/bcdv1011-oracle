# Oracle feeding data to an Ethereum Smart Contract

Invoke an Ethereum Smart Contract running on Ganache to set contract state data from an external source (Oracle).

## How to run the project?
* Start Ganache in deterministric mode from command line interface.
* Deploy the contract Stocks.sol available under contracts folder.
* Paste the resulting contract address and abi inside the config file **web-oracle/src/config.js** .
* Change directory to backend server application **myapp** .
* Install packages using `npm install` and start backend server using `npm start`.
* Open a new browser and check the URL: [http://localhost:8000](http://localhost:8000)
* Change directory to backend server application **web-oracle** .
* Install packages using `npm install` and start backend server using `npm start`.
* Open a new browser and check the URL: [http://localhost:3000](http://localhost:3000)
