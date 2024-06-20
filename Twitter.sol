
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.25;

contract Twitter {
    struct Tweet {
        string text;
        uint40 like_count;
        address owner;
        uint64 id;
        bool isLocked;
    }

    uint64 id;
    mapping(uint64 => Tweet) tweets;

    address owner;
    
    constructor () {
        id = 0;
        owner = msg.sender;
    }

    function send_tweet(string memory text) public {
        tweets[id] = Tweet(text, 0, msg.sender, id, false);
        id++;
    }

    function like_tweet(uint64 tweet_id) public tweetAvailable(tweet_id) notLocked(tweet_id){
        require(tweet_id < id, "tweet_id is not available");
        tweets[tweet_id].like_count++;
    }

    function get_tweet(uint64 tweet_id) public view tweetAvailable(tweet_id) notLocked(tweet_id) returns (Tweet memory) {
        return tweets[tweet_id];
    }

    function lock_tweet(uint64 tweet_id) public tweetAvailable(tweet_id) onlyOwner {
        tweets[tweet_id].isLocked = true;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "only the owner can call this method");
        _;
    }

    modifier notLocked(uint64 tweet_id) {
        require(tweets[tweet_id].isLocked == false, "tweet is locked due to harmful content");
        _;
    }

    modifier tweetAvailable(uint64 tweet_id) {
        require(tweet_id < id, "tweet is not available");
        _;
    }
}

