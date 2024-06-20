// Function to check if the wallet is connected and the contract object is created
function assertReqs() {
    // Check if the account is connected
    if (window.account == undefined){
        // Alert the user to connect their wallet if it's not connected
        alert('Please connect your wallet first!')
        return false;
    }
    // Check if the contract object is created
    if (window.contract == undefined){
        // Alert the user if the contract object is not created
        alert('Contract object is not created. Something is wrong!')
        return false;
    }
    // Return true if both checks pass
    return true;
}

// Function to send a tweet
async function sendTweet() {
    // Check the requirements before proceeding
    if (!assertReqs()) return;
    // Get the tweet text from the input field
    const tweetText = document.getElementById('tweetText').value;
    // Call the send_tweet method from the contract
    await window.contract.methods.send_tweet(tweetText).send({from: window.account});
    // Alert the user that the tweet was sent
    alert('Tweet sent!')
}


// Function to check if the wallet is connected and the contract object is created
function assertReqs() {
    // Check if the account is connected
    if (window.account == undefined){
        // Alert the user to connect their wallet if it's not connected
        alert('Please connect your wallet first!')
        return false;
    }
    // Check if the contract object is created
    if (window.contract == undefined){
        // Alert the user if the contract object is not created
        alert('Contract object is not created. Something is wrong!')
        return false;
    }
    // Return true if both checks pass
    return true;
}

// Function to send a tweet
async function sendTweet() {
    // Check the requirements before proceeding
    if (!assertReqs()) return;
    // Get the tweet text from the input field
    const tweetText = document.getElementById('tweetText').value;
    // Call the send_tweet method from the contract
    await window.contract.methods.send_tweet(tweetText).send({from: window.account});
    // Alert the user that the tweet was sent
    alert('Tweet sent!')
}


// Assign the sendTweet function to the global window object, making it accessible from anywhere in the application
window.sendTweet = sendTweet;

// Assign the likeTweet function to the global window object, making it accessible from anywhere in the application
window.likeTweet = likeTweet;

// Assign the getTweet function to the global window object, making it accessible from anywhere in the application
window.getTweet = getTweet;

// Assign the lockTweet function to the global window object, making it accessible from anywhere in the application
window.lockTweet = lockTweet;