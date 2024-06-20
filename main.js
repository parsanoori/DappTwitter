// import Web3, a collection of libraries that allow you to interact with a local or remote Ethereum node
import Web3 from 'web3';

// import the contract ABI (Application Binary Interface) and contract address from another file
import {contractABI, contractAddress} from './contract-datas.js';

// add an event listener that runs a function when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // check if the browser has Ethereum capabilities
    if (window.ethereum) {
        // if so, initialize a new Web3 instance with the Ethereum provider
        window.web3 = new Web3(window.ethereum);
        // request the user's Ethereum accounts
        window.ethereum.sendAsync({method: 'eth_requestAccounts'}, (err, res) => {
            // if there's an error, log it
            if (err) {
                console.log(err);
            }
            // log the returned accounts
            console.log('Accounts ', res.result);
            // store the first account in a global variable
            window.account = res.result[0];
            // create a new contract instance with the contract ABI and address, and store it in a global variable
            window.contract = new window.web3.eth.Contract(contractABI, contractAddress);
            console.log('contract object created')
        })
    } else {
        // if the browser doesn't have Ethereum capabilities, alert the user to install MetaMask
        alert('Please install MetaMask!');
    }
});