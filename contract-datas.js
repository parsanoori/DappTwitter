
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "tweet_id",
				"type": "uint64"
			}
		],
		"name": "get_tweet",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "text",
						"type": "string"
					},
					{
						"internalType": "uint40",
						"name": "like_count",
						"type": "uint40"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "id",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "isLocked",
						"type": "bool"
					}
				],
				"internalType": "struct Twitter.Tweet",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "tweet_id",
				"type": "uint64"
			}
		],
		"name": "like_tweet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "tweet_id",
				"type": "uint64"
			}
		],
		"name": "lock_tweet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "send_tweet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const contractAddress = '0xb85B76DED3aF718A95EB777F63045b0Bc2415d6C'

export { contractABI, contractAddress }

