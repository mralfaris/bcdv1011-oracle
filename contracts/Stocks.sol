// SPDX-License-Identifier:MIT

pragma solidity ^0.7.1;

contract Stocks {
    
    address owner;
    
    struct stock {
        uint price;
        uint volume;
    }
    
    mapping(bytes4 => stock) stockQuote;
    
    address oracleOwner;
    
    constructor() {
        owner = msg.sender;
    }
    
    
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    function setStock(bytes4 symbol, uint price, uint volume) public {
        stock memory _stock = stock({price: price, volume: volume});
        stockQuote[symbol] = _stock;
    } 
    
    function getStockPrice(bytes4 symbol) public view returns(uint) {
        return stockQuote[symbol].price;
    }
    
    function getStockVolume(bytes4 symbol) public view returns(uint) {
        return stockQuote[symbol].volume;
    }
}
