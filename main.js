// import Web3
import Web3 from 'web3';
import {contractABI, contractAddress} from './contract-datas.js';

// runs a function when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.sendAsync({method: 'eth_requestAccounts'}, (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log('Accounts ', res.result);
            window.account = res.result[0];
            window.contract = new window.web3.eth.Contract(contractABI, contractAddress);
            console.log('contract object created')
        })
    } else {
        alert('Please install MetaMask!');
    }
});

