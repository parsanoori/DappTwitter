function assertReqs() {
    if (window.account == undefined){
        alert('Please connect your wallet first!')
        return false;
    }
    if (window.contract == undefined){
        alert('Contract object is not created. Something is wrong!')
        return false;
    }
    return true;
}
async function sendTweet() {
    if (!assertReqs()) return;
    const tweetText = document.getElementById('tweetText').value;
    await window.contract.methods.send_tweet(tweetText).send({from: window.account});
    alert('Tweet sent!')
}

async function likeTweet() {
    if (!assertReqs()) return;
    const tweetId = document.getElementById('likeTweetId').value;
    await window.contract.methods.like_tweet(tweetId).send({from: window.account});
    alert('Tweet liked!')
}

async function getTweet() {
    if (!assertReqs()) return;
    const tweetId = document.getElementById('getTweetId').value;
    console.log('tweetId: ', tweetId)
    try {
        const tweet = await window.contract.methods.get_tweet(tweetId).call();
        console.log(tweet)
        const text = tweet[0];
        const likes = tweet[1].toString();
        const owner = tweet[2];
        const id = tweet[3].toString();
        const isLocked = tweet[4].toString();
        // console log the consts
        console.log('text: ', text)
        console.log('likes: ', likes)
        console.log('owner: ', owner)
        console.log('id: ', id)
        console.log('isLocked: ', isLocked)
        // display them on the page
        document.getElementById('getTweetText').innerText = text;
        document.getElementById('getTweetLikes').innerText = likes;
        document.getElementById('getTweetOwner').innerText = owner;
        document.getElementById('retrieveTweetId').innerText = id;
    } catch (error) {
        alert(error);
        return;
    }
}

async function lockTweet() {
    if (!assertReqs()) return;
    const tweetId = document.getElementById('lockTweetId').value;
    await window.contract.methods.lock_tweet(tweetId).send({from: window.account});
    alert('Tweet locked!')
}

window.sendTweet = sendTweet;
window.likeTweet = likeTweet;
window.getTweet = getTweet;
window.lockTweet = lockTweet;
