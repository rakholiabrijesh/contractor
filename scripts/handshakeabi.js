var handshakeABI = [
	{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "employer",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "contractor",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "payment",
						"type": "uint256"
					}
				],
				"name": "AgreementCreated",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					}
				],
				"name": "getUnanimousVote",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_contractor",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_payment",
						"type": "uint256"
					}
				],
				"name": "init",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "_vote",
						"type": "bool"
					}
				],
				"name": "setContractorVote",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "_vote",
						"type": "bool"
					}
				],
				"name": "setEmployerVote",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		
		
]
