let ABI_VLT = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "routerAddr",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokens",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bootstrap",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isBootStrapped",
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
                "internalType": "address[]",
                "name": "receivers",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "name": "multiTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "router",
        "outputs": [
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]


let ABI_UNIROUTER = [
	{
		"inputs": [],
		"name": "WETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountADesired",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBDesired",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "addLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenDesired",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "addLiquidityETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveOut",
				"type": "uint256"
			}
		],
		"name": "getAmountIn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveOut",
				"type": "uint256"
			}
		],
		"name": "getAmountOut",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			}
		],
		"name": "getAmountsIn",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			}
		],
		"name": "getAmountsOut",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveB",
				"type": "uint256"
			}
		],
		"name": "quote",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "removeLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "removeLiquidityETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "approveMax",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "removeLiquidityETHWithPermit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "approveMax",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "approveMax",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "removeLiquidityWithPermit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapETHForExactTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactETHForTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForETH",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountInMax",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapTokensForExactETH",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountInMax",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapTokensForExactTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let ABI_STACK = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256[14]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "distributionInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_toAddress",
				"type": "address"
			},
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dividendBalance_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "donatePool",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	}
]

let ABI_LIFE = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "dividendsOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "claimsOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "swapCollector_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_ethToSpend",
                "type": "uint256"
            }
        ],
        "name": "calculateTokensReceived",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "statsOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256[16]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myDividends",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalClaims",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "sellPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "claim",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalTxs",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalEthBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "buyFor",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "distributionInterval",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myClaims",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalDeposits",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "swapAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "buyPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_tokensToSell",
                "type": "uint256"
            }
        ],
        "name": "calculateethReceived",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myTokens",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "buy",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_toAddress",
                "type": "address"
            },
            {
                "name": "_amountOfTokens",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "swapBalance_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "dailyClaimEstimate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "depotFlushSize",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastPayout",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "dividendBalance_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "players",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_amountOfTokens",
                "type": "uint256"
            }
        ],
        "name": "sell",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "donatePool",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "tokenBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "dailyEstimate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "balanceInterval",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "reinvest",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "name": "_swapAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "invested",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "soldTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "claims",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onLeaderBoard",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "incomingeth",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onTokenPurchase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokensBurned",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "ethEarned",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onTokenSell",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethReinvested",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onReinvestment",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethWithdrawn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onWithdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onClaim",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onTransfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ethAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onBuyBack",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "balance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onDonation",
        "type": "event"
    }
]

let ABI_WETH = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]

let ABI_STACKPLUS = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "claimsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"name": "_buy_amount",
				"type": "uint256"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapCollector_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256[16]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastBuyback",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "collateralAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_flushSize",
				"type": "uint256"
			}
		],
		"name": "updateFlushSize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "distributionInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "vltAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_toAddress",
				"type": "address"
			},
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapBalance_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyClaimEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "depotFlushSize",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"name": "updateSwapRouter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dividendBalance_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_buy_amount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "donatePool",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_collateralAddress",
				"type": "address"
			},
			{
				"name": "_vltAddress",
				"type": "address"
			},
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "claims",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBuyBack",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "onRouterUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldFlushSize",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newFlushSize",
				"type": "uint256"
			}
		],
		"name": "onFlushUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]

let ABI_MOON = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "payoutInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256[14]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "collateralBuffer_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "collateralAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalRewardTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_flushSize",
				"type": "uint256"
			}
		],
		"name": "updateFlushSize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_payout",
				"type": "uint256"
			},
			{
				"name": "_fund",
				"type": "uint256"
			}
		],
		"name": "updateIntervals",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rewardAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fundingInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_toAddress",
				"type": "address"
			},
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"name": "updateSwapRouter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "flushSize",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastFunding",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_collateralAddress",
				"type": "address"
			},
			{
				"name": "_rewardAddress",
				"type": "address"
			},
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "payout",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "fund",
				"type": "uint256"
			}
		],
		"name": "onUpdateIntervals",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "collateralAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "rewardAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onCollateraltoReward",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onEthtoCollateral",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onRewardtoCollateral",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "rewardBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "onRouterUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldFlushSize",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newFlushSize",
				"type": "uint256"
			}
		],
		"name": "onFlushUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]

let ABI_LDRIVE = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "donation",
				"type": "uint256"
			}
		],
		"name": "LiquidityDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "TokenClaim",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "availableOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "claimedOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "donationsOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "end",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endedOn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUnlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "participants",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimableTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalEthDonated",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
  
let ABI_ELEPHANT = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "exchangeRouter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "campaignPeriod",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minTokensBeforeSwap",
				"type": "uint256"
			}
		],
		"name": "MinTokensBeforeSwapUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensIntoLiqudity",
				"type": "uint256"
			}
		],
		"name": "SwapAndLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_campaignPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_liquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_taxFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUnlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "graveyard",
		"outputs": [
			{
				"internalType": "contract ElephantGraveyard",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromFee",
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
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromReward",
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
		"inputs": [],
		"name": "launch",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launched",
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
		"inputs": [],
		"name": "liquidityDrive",
		"outputs": [
			{
				"internalType": "contract ElephantLiquidityDrive",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ready",
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
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			}
		],
		"name": "reflect",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "deductTransferFee",
				"type": "bool"
			}
		],
		"name": "reflectionFromToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startedOn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAndLiquifyEnabled",
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
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rAmount",
				"type": "uint256"
			}
		],
		"name": "tokenFromReflection",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalFees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Pair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

let ABI_ELEPHANT_STACK = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenRouter",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBuyBack",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buybackEnabled",
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
				"internalType": "uint256",
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distributionInterval",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dividendBalance_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "donatePool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "elephantAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "elephantReserve_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "enableBuyback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "firstBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "firstTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "graveyardAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"internalType": "uint256[14]",
				"name": "",
				"type": "uint256[14]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sweep",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenUniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBuyBack",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_toAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenRouter",
				"type": "address"
			}
		],
		"name": "updateTokenRouter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

let ABI_GRAVEYARD = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Rebalance","type":"event"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRebalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ready","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rebalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upperboundPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
let BANKROLL = {
    "rinkeby": {
        VLT: "0xcdeb88ba2bf9b98824f1f2293b1c7d603330dc7a",
        Stack: "",
        Life: "",
        USDC: "0xbaf95828cb73073b0339000254ed0029212feb4d",
        Router: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
        WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
        WBTC: "0xb81a042838de0e48fb672eec7b32f4e59574713e",
        Moon: {
            AMPL: {contract:"0x8DE95B8e307BE9Df7b5ec00EB8ceC392649Bf283", token:"0xb81a042838de0e48fb672eec7b32f4e59574713e"}
        },
        LiquidityDrive: "0xD3D1EB62808D4C3583F59fE207E61677b75A7981",
        Elephant:"0x9a444FBD6b9405160F0F1257CAAF3dbe500d476d"
    },
    "mainnet": {
        VLT: "0x6b785a0322126826d8226d77e173d75dafb84d11",  //vault
        AMPL: "0xd46ba6d942050d489dbd938a2c909a5d5039a161", // AdminUpgradeabilityProxy
        WETHToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", //WETH9
        Stack: "0x84A4eCCB81A1Fd0867C7682E2c85FFeF4538A2F4", //BankrollNetworkStack
        Life: "0x3d76cd9723e0cc8875907CF944c147eE4baFB29E", //BankrollNetworkLife
        Router: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", //UniswapV2Router01
        VLTWETH_BAL: "",
        WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", //WETH9
        USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", //FiatTokenProxy
        Univ2Pool: "0x966053ca4fca049173eb1f27e4cb168ccb794534", //UniswapV2Pair
        StackPlus: {
            LINK: {token:"0x514910771af9ca656af840dff83e8264ecf986ca", stack:"0x7B3611b0AfFc27D212A68293831d3B55354B802F", name:"Chainlink", desc:""},
            DAI: {token:"0x6b175474e89094c44da98b954eedeac495271d0f", stack:"0x7a40ab4b8d016e4e76faea844543b033a00ab54d", name:"Dai", desc:""},
            BAT: {token:"0x0D8775F648430679A709E98d2b0Cb6250d2887EF", stack:"0x85cdDcE5C1889D84e10d97074b7Af007f2CaDCC5", name:"Basic Attention Token", desc:""},
            KNC: {token:"", stack:"", name:"", desc:""},
            LEND: {token:"", stack:"", name:"", desc:""}
        },
        Moon: {
            AMPL: {contract:"0x45B7A724DaDb55fAe51319184Ad6e2323287959e", token:"0xd46ba6d942050d489dbd938a2c909a5d5039a161", decimals:9}
        }

    },

    "BSC": { 
        StackPlus: {
            "bdollar" : { token: "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454", stack: "0xd397f06eEcd4Eb9aF0492874BE0D24d67560fF69",proxy: "0x70D9c78D44bb783D5B6422450ddB7E6459Eeb6f2", block: 5315882, timestamp: 1614747600 , symbol: "BDO", padding: 4},
            "busd" : { token: "0xe9e7cea3dedca5984780bafc599bd69add087d56", stack: "0x599640dDacb546B1446FA149f4a9CEEcd3fcc87a", proxy: "0x4fb2349682DedA7427C8CBfC9D6928d11305f565", block: 5849079, timestamp: 1616253841 , symbol: "BUSD", padding: 4},
            "wbnb" : { token: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", stack: "0x564D4126AF2B195fFAa7fB470ED658b1D9D07A54", proxy: "0xD47fF53625A2B26C5EF88A9Abe9A8CA5F575837f", block: 5546763, timestamp: 1615362189, symbol: "WBNB", padding: 5},
            "binance-bitcoin" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x83ad16274c8bdD547582de02dB25a81A7A33759F", proxy: "0xe8c45E64e77Cd954107dA3bd1E27e749C228E57D", block: 5575494, timestamp: 1615431544, symbol: "BTCB" , padding: 9},
            //Just used for the landing page
            "busdv2" : { token: "0xe9e7cea3dedca5984780bafc599bd69add087d56", stack: "0x16d0a151297a0393915239373897bCc955882110", symbol: "BUSD", timestamp: 1625344185, block: 8842828, padding: 4},
            "wbnbv2" : { token: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", stack: "0xAdEfb902CaB716B8043c5231ae9A50b8b4eE7c4e", symbol: "WBNB", padding: 5, timestamp: 1625698289, block: 8960188},
            "ethereum" : { token: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", stack: "0xeF6676536a1d98942d149f52708770e11Db47BcE", symbol: "ETH", padding: 5, timestamp: 1625727581, block: 8969946},
            "pancakeswap-token" : { token: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", stack: "0x0a15B914388d48d77fE70c8a832cD992dD05e76E", symbol: "CAKE", padding: 5, timestamp: 1627348141, block: 9508551},
            "binance-bitcoinv2" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x313E71df70b106BD8e456cfbAfd3583595EdE490", symbol: "BTCB", padding: 5, timestamp: 1625727647, block: 8969968},
            "trunk" : { token: "0xdd325C38b12903B727D16961e61333f4871A70E0", stack: "0xec10059BA900883ed6154883E9f3A1C24fcE1eb7", symbol: "TRUNK", padding: 4, timestamp: 1632438372, block: 11177510}
        },
        ElephantStack: {
            "busd" : { token: "0xe9e7cea3dedca5984780bafc599bd69add087d56", stack: "0x16d0a151297a0393915239373897bCc955882110", symbol: "BUSD", timestamp: 1625344185, block: 8842828, padding: 4},
            "wbnb" : { token: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", stack: "0xAdEfb902CaB716B8043c5231ae9A50b8b4eE7c4e", symbol: "WBNB", padding: 5, timestamp: 1625698289, block: 8960188},
            "pancakeswap-token" : { token: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", stack: "0x0a15B914388d48d77fE70c8a832cD992dD05e76E", symbol: "CAKE", padding: 5, timestamp: 1627348141, block: 9508551},
            "ethereum" : { token: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", stack: "0xeF6676536a1d98942d149f52708770e11Db47BcE", symbol: "ETH", padding: 5, timestamp: 1625727581, block: 8969946},
            "trunk" : { token: "0xdd325C38b12903B727D16961e61333f4871A70E0", stack: "0xec10059BA900883ed6154883E9f3A1C24fcE1eb7", symbol: "TRUNK", padding: 4, timestamp: 1632438372, block: 11177510},
            "binance-bitcoin" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x313E71df70b106BD8e456cfbAfd3583595EdE490", symbol: "BTCB", padding: 5, timestamp: 1625727647, block: 8969968},
            //"binance-bitcoin" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x83ad16274c8bdD547582de02dB25a81A7A33759F", symbol: "BTCB" , padding: 9}
        },
        LiquidityDrive: "0xF9d64317d4cdA0a6B4Ef41a32E301eA64f8B5Cb3", // ElephantLiquidityDrive
        Elephant:"0xE283D0e3B8c102BAdF5E8166B73E02D96d92F688", // Elephant
        Trunk: "0xdd325C38b12903B727D16961e61333f4871A70E0", //  ElephantDollar
        WBNB:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
        BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BEP20Token
        Router: "0x10ed43c718714eb63d5aa57b78b54704e256024e", // PancakeRouter
        UniPair: "0x1cea83ec5e48d9157fcae27a19807bef79195ce1", // PancakePair
        Graveyard: "0xf7cc784bd260eafc1193d337ffcea4d6dda0dd71", // ElephantGraveyard
        TRUNKBackedPool: "0xDb2c2741542E37bDa373bE49605cb8EFC5440455", // ElephantDollarDistributor
        Zero:"0x0000000000000000000000000000000000000000",
        TRUNKSecondaryPool:"0x612cE90180ec0185aD1aA09C74704a048a4ccCBA", // ElephantPoolDistributor
        TRUNKPerformanceBackedPool: "0x8655E8F5FeBEF300645d2CABAD84a1fDa72EEe3B", // ElephantDollarDistributor
        TRUNKPerformanceDestination: "0x99c9196F2bCB898F94a346B27cde7cE305EA8f05", // BackedForwardingPool
        TRUNKReserve: "0xD520a3B47E42a1063617A9b6273B206a07bDf834",//"0xd23112A7659Aa55a5d5e4cdfB6A76Cce23f9C099",//"0x27896749b31B1e1464611B13ea9b97DdE50Ff468",//"0x501bcE6700d80b2d40d45474F13e17213363d04D",
        ElephantTreasury: "0xAF0980A0f52954777C491166E7F40DB2B6fBb4Fc", // Treasury
        TRUNKTreasury: "0xaCEf13009D7E5701798a0D2c7cc7E07f6937bfDd", // not verified
        TRUNKLP: "0xf15a72b15fc4caed6fadb1ba7347f6ccd1e0aede", // PancakePair
        BUSDTreasury: "0xCb5a02BB3a38e92E591d323d6824586608cE8cE4", // Treasury
        Partnerlist: "0x3064CdA024b921F83E72c996bc06982A5885ED97", // Whitelist
        FlowData:"0x4C64719E524383662232FDb50dfdaDEFB15c09D9", // not veriefied
        SponsorData:"0x708115E21b72eab22De31458b7B3A791c45813D2", // not verified
        ReferralData:"0x6248d9a3DFF17DcdA92141AA1e8F1E9d6fE1eA4A", // not verified
        FlowEngine: "0x6839e295a8f13864A2830fA0dCC0F52e71a82DbF"//"0xf7f376EA0584aE97706B78cC1b320CB7C811C10E"//"0x962B70e532370De831a64eD8B40F92dCf05A32ba"//"0x2EFfF893B6Fc0bFF779d5448Fa0c361975f0961c"//"0x6F052e85197E4B2c6F306FEE01f25a5355722Ef8"//"0x30d4d880cccA00c508d1269DdB8668Dd7FfC8732"//"0x4C4F8050e5DE8560016A3BbE501FFaD4B3853f2c",//"0xd925154517d08Ab42b28e5149C43bF63950E5268",//"0x64f674a2c5e6C833e9A5862839956e4f40E2FF84",//"0x00C093e166FbcF30e7B7FCD0632daFe9d096B9F4",//"0x86c4dA96d8A9D6307dec26d937B2cC9044690883"//"0xC04C9C6a677117Aa85B0FfF9E8bb747686a9e48B"//0xb2f8f2aff700E3A44c947EF03b577E5d59D12cF3"  NOT verified
        /* Botch
        LiquidityDrive: "0x9BB73dc5f901A7720C384d37aceBBa13B119CF12",
        Elephant:"0xD96EC811359BFD94D2dfe2A3Bd8DA68BF262Be1A"
        */

    }
}


var default_currency = 'USDT'
var currency = (typeof default_currency === 'undefined') ? 'USD' : default_currency


var bdo, stack, life, router, weth, collateral, stackplus, moon, stackProxy, ldrive, graveyard, flowEngine, flowData,referralData, sponsorData, partnerList,
elephantReserve, elephantTreasury, busdTreasury, trunkTreasury, wbnb, busd, elephant, trunk, trunkWhitelist, performancePool, rewardPool, secondaryPool


// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

async function networkReady() {

    let netId = await window.web3.eth.getChainId()
    var network = 'Unsupported network detected'
    switch (netId) {
        case 1:
            console.log('This is mainnet')
            network = 'Mainnet'
            if (BANKROLL) {
                BANKROLL.network = 'mainnet'
            }
            break
        case 2:
            console.log('This is the deprecated Morden test network.')
            break
        case 3:
            console.log('This is the ropsten test network.')
            break
        case 4:
            console.log('This is the Rinkeby test network.')
            network = 'Rinkeby'
            if (BANKROLL) {
                BANKROLL.network = 'rinkeby'
            }
            break
        case 56:
            console.log('This is the BSC mainnet.')
            network = 'BSC Mainnet'
            if (BANKROLL) {
                BANKROLL.network = 'BSC'
            }
            break
        case 42:
            console.log('This is the Kovan test network.')
            break
        default:
            console.log('This is an unknown network.')
    }


    $('#eth-network').text(network)
}

function getWeb3() {
    let web3js;

    if (window.web3 !== null) {
        web3js = window.web3
    } else {
        return null;
    }

    return web3js;
}

//this is always called after init
async function initContracts() {
    let web3js = getWeb3();

    let options = {from: window.ethDefaultAddress}

    console.log('average gas price', await web3js.eth.getGasPrice())
    if (COLLATERAL_SYMBOL != null) {
        if (_.isUndefined(window.isElephantStack)){
            collateral = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].StackPlus[COLLATERAL_SYMBOL].token, options)
            stack = new web3js.eth.Contract(ABI_STACK, BANKROLL[BANKROLL.network].StackPlus[COLLATERAL_SYMBOL].stack, options)
            stackProxy = new web3js.eth.Contract(ABI_STACK, BANKROLL[BANKROLL.network].StackPlus[COLLATERAL_SYMBOL].proxy, options)
        } else {
            collateral = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].ElephantStack[COLLATERAL_SYMBOL].token, options)
            stack = new web3js.eth.Contract(ABI_ELEPHANT_STACK, BANKROLL[BANKROLL.network].ElephantStack[COLLATERAL_SYMBOL].stack, options)
        }
    }
    ldrive = new web3js.eth.Contract(ABI_LDRIVE, BANKROLL[BANKROLL.network].LiquidityDrive, options)
    elephant = new web3js.eth.Contract(ABI_ELEPHANT, BANKROLL[BANKROLL.network].Elephant, options)
    wbnb = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].WBNB, options)
    busd = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].BUSD, options)
    trunk = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].Trunk, options)
    router = new web3js.eth.Contract(ABI_UNIROUTER, BANKROLL[BANKROLL.network].Router, options)
    graveyard = new web3js.eth.Contract(ABI_GRAVEYARD, BANKROLL[BANKROLL.network].Graveyard, options)
    elephantReserve = new web3js.eth.Contract(ABI_TRUNK_RESERVE, BANKROLL[BANKROLL.network].TRUNKReserve, options)
    referralData = new web3js.eth.Contract(ABI_FLOW_REFERRAL, BANKROLL[BANKROLL.network].ReferralData, options)

    //elephantTreasury, busdTreasury, busd, elephant, trunk, performancePool, rewardPool, secondaryPool
    elephantTreasury = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].ElephantTreasury, options)
    busdTreasury = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].BUSDTreasury, options)
    trunkTreasury = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].TRUNKTreasury, options)
    trunkWhitelist = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].Trunk, options)
    flowData = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].FlowData, options)
    
    sponsorData = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].SponsorData, options)
    flowEngine = new web3js.eth.Contract(ABI_FLOW_ENGINE, BANKROLL[BANKROLL.network].FlowEngine, options) 
    performancePool = new web3js.eth.Contract(ABI_TRUNK_DISTRIBUTOR, BANKROLL[BANKROLL.network].TRUNKPerformanceBackedPool, options)
    rewardPool = new web3js.eth.Contract(ABI_TRUNK_DISTRIBUTOR, BANKROLL[BANKROLL.network].TRUNKBackedPool, options)
    secondaryPool = new web3js.eth.Contract(ABI_POOL_DISTRIBUTOR, BANKROLL[BANKROLL.network].TRUNKSecondaryPool, options)
    partnerList =  new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].Partnerlist, options)   
    

    /*
    stack = new web3js.eth.Contract(ABI_STACK, BANKROLL[BANKROLL.network].Stack, options)
    bdo = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].BDO, options)
    */

}

async function wireTRUNK() {
    // elephantTreasury, busdTreasury, busd, elephant, trunk, performancePool, rewardPool, secondaryPool
    let txs = [];
    let router = BANKROLL[BANKROLL.network].Router;
    try {

        //add stack pools
        let btcPool = BANKROLL[BANKROLL.network].ElephantStack['binance-bitcoin']
        let ethPool = BANKROLL[BANKROLL.network].ElephantStack['ethereum']
        txs.push(secondaryPool.methods.add(btcPool.stack, btcPool.token, router).send())
        txs.push(secondaryPool.methods.add(ethPool.stack, ethPool.token, router).send())

        //add trunk reward pool destinations
        txs.push(rewardPool.methods.add(BANKROLL[BANKROLL.network].ElephantStack['trunk'].stack).send())
        txs.push(performancePool.methods.add(BANKROLL[BANKROLL.network].TRUNKPerformanceDestination).send())

    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs
    
} 


async function wireReserve() {
    // elephantTreasury, busdTreasury, busd, elephant, trunk, performancePool, rewardPool, secondaryPool
    let txs = [];
    let router = BANKROLL[BANKROLL.network].Router;
    try {

        //update pools to reserve
        txs.push(elephantReserve.methods.updateRewardPools(rewardPool.options.address, performancePool.options.address).send())
        
        //update reserve to pools
        txs.push(rewardPool.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(performancePool.methods.updateReserve(elephantReserve.options.address).send())

        excludeReserve()

        addWhitelists()

    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs
    
} 

async function wireFlow() {
    let txs = [];

    try {
        //add engine dependencies
        txs.push(flowEngine.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(flowEngine.methods.updateFlowData(flowData.options.address).send())
        txs.push(flowEngine.methods.updateSponsorData(sponsorData.options.address).send())
        txs.push(flowEngine.methods.updateReferralData(referralData.options.address).send())

        //whitelist engine
        txs.push(flowData.methods.addAddressToWhitelist(flowEngine.options.address).send())   
        txs.push(sponsorData.methods.addAddressToWhitelist(flowEngine.options.address).send())       
        txs.push(elephantReserve.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(partnerList.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(trunkTreasury.methods.addAddressToWhitelist(flowEngine.options.address).send())

        //exclude engine from  fees
        txs.push(elephant.methods.excludeFromFee(flowEngine.options.address).send())
        txs.push(elephant.methods.excludeFromReward(flowEngine.options.address).send())

    } catch(e){
        console.error(e, "Failed during wire tx")
    }
}

async function excludeReserve() {

    let txs = [];

    try {

        //-----------add elephant fee/reward exclusions
        txs.push(elephant.methods.excludeFromFee(elephantReserve.options.address).send())
        txs.push(elephant.methods.excludeFromFee(elephantTreasury.options.address).send())
        txs.push(elephant.methods.excludeFromReward(elephantReserve.options.address).send())
        
    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs
}

async function addWhitelists() {

    let txs = [];

    try {

       //-----------add network whitelists

        //add reserve to trunk; to mint
        txs.push(trunkWhitelist.methods.addAddressToWhitelist(elephantReserve.options.address).send())

        //add pools to reserve; to redeem
        txs.push(elephantReserve.methods.addAddressToWhitelist(rewardPool.options.address).send())
        txs.push(elephantReserve.methods.addAddressToWhitelist(performancePool.options.address).send())

        //add reserve to pools; to credit
        txs.push(rewardPool.methods.addAddressToWhitelist(elephantReserve.options.address).send())
        txs.push(performancePool.methods.addAddressToWhitelist(elephantReserve.options.address).send())

        //add reserve to treasuries; to withdraw
        txs.push(elephantTreasury.methods.addAddressToWhitelist(elephantReserve.options.address).send())
        txs.push(busdTreasury.methods.addAddressToWhitelist(elephantReserve.options.address).send())
        
    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs
}

async function getRevertReason(txHash){

    const tx = await web3.eth.getTransaction(txHash)
  
    var result = await web3.eth.call(tx, tx.blockNumber)
  
    result = result.startsWith('0x') ? result : `0x${result}`
  
    if (result && result.substr(138)) {
  
      const reason = web3.utils.toAscii(result.substr(138))
      console.log('Revert reason:', reason)
      return reason
  
    } else {
  
      console.log('Cannot get reason - No return value')
  
    }
  
  }


function convertEthToWei(e) {
    return 1e18 * e
}

function convertWeiToEth(e) {
    return e / 1e18
}


function resolveInputAndBalance(input, balance, unit){
    let web3js = getWeb3()
    unit = (unit == null) ? 'ether' : unit
    balance = web3js.utils.toBN(balance)
    input = web3js.utils.toBN(web3js.utils.toWei(input, unit))
    return web3js.utils.BN.min(input, balance).sub( web3js.utils.toBN(1)) //lets leave dust
}

function formatSun(sun) {
    let value = numeral(convertWeiToEth(sun)).format('0,0.000 a').toUpperCase()
    
    return (value.trim() == 'NAN') ?  formatSun(0) :  value
}

function formatSunX(sun, padding) {
    let value = numeral(convertWeiToEth(sun)).format(`0,${parseFloat(0).toFixed(padding)} a`).toUpperCase()
    return (value.trim() == 'NAN') ? formatSunX(0, padding) : value
}

function formatElephant(sun){
    let padding = 4
    let value = numeral(sun/1e9).format(`0,${parseFloat(0).toFixed(padding)} a`).toUpperCase()
    return (value.trim() == 'NAN') ? formatElephant(0) : value
}

async function getElephantPrice(amount) {
    let web3js = getWeb3()
    let result =  await router.methods.getAmountsOut(web3js.utils.toBN(amount), [BANKROLL[BANKROLL.network].Elephant, BANKROLL[BANKROLL.network].WBNB, BANKROLL[BANKROLL.network].BUSD]).call()
    return result[2]
}

async function getWBNBPrice(amount) {
    let web3js = getWeb3()
    let result =  await router.methods.getAmountsOut(web3js.utils.toBN(amount), [BANKROLL[BANKROLL.network].WBNB, BANKROLL[BANKROLL.network].BUSD]).call()
    return result[1]
}


const ELEPHANTWBNBLP = '0x1CEa83EC5E48D9157fCAe27a19807BeF79195Ce1'
const ELEPHANTBUSDLP = '0x647bc907d520C3f63bE38d01DBd979f5606beC48'
const ELEPHANTTOKEN = '0xE283D0e3B8c102BAdF5E8166B73E02D96d92F688'
const TRUNKTOKEN = '0xdd325C38b12903B727D16961e61333f4871A70E0'
const ELEPHANT_WBNB_LP = "0x1CEa83EC5E48D9157fCAe27a19807BeF79195Ce1"
const ELEPHANT_BUSD_LP = "0x647bc907d520C3f63bE38d01DBd979f5606beC48"
const TRUNK_BUSD_LP = "0xf15A72B15fC4CAeD6FaDB1ba7347f6CCD1E0Aede"
const BUSD_TREASURY = "0xCb5a02BB3a38e92E591d323d6824586608cE8cE4"

const lpContracts = [
  ELEPHANTTOKEN,
  TRUNKTOKEN
];
const lpAddresses = [
  ELEPHANTWBNBLP,
  ELEPHANTBUSDLP,
  TRUNK_BUSD_LP
];

let coins = {
  //token addresses
  ELEPHANT: "0xE283D0e3B8c102BAdF5E8166B73E02D96d92F688",
  TRUNK: "0xdd325C38b12903B727D16961e61333f4871A70E0",
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
}

let busd_addresses = [
  ELEPHANT_BUSD_LP,
  TRUNK_BUSD_LP,
  BUSD_TREASURY,
]

/**
* TVLCALC
* = toUSD('WBNB', WBNB.balanceOf(ELEPHANT_WBNB_LP)) 
* + toUSD('BUSD', BUSD.balanceOf(ELEPHANT_BUSD_LP) + BUSD.balanceOf(TRUNK_BUSD_LP) + BUSD.balanceOf(BUSD_TREASURY))
* + toUSD('ELEPHANT', WBNB.totalSupply()) + toUSD('TRUNK', WBNB.totalSupply())
*/

async function tvl() {

  let sumTVL 

  let wbnb_price = await getWBNBPrice(1e18) //coingeckoPrice('wbnb')
  //let busd_price = await coingeckoPrice('busd')
  let elephant_price = await getElephantPrice(1e9)

  //ELEPHANT
  let elephant_supply = parseInt(await elephant.methods.totalSupply().call())
  let elephant_bal =   elephant_price * elephant_supply / 1e9    
    
  //BNB
  let wbnb_total = parseInt(await wbnb.methods.balanceOf(ELEPHANT_WBNB_LP).call())
  let wbnb_bal = wbnb_total * wbnb_price / 1e18

  //TRUNK
  let trunk_bal = parseInt(await trunk.methods.totalSupply().call())

  //BUSD
  let busd_bal = 0
  for (let address of busd_addresses) {
    busd_bal += parseInt(await busd.methods.balanceOf(address).call()) // * busd_price
  }

  //SUM
  sumTVL = busd_bal + elephant_bal + wbnb_bal + trunk_bal

  return sumTVL;
}




function formatTxUrl(hash) {
    let domain = 'bscscan.com'

    if (BANKROLL.network == 'rinkeby') {
        domain = 'rinkeby.etherscan.io'
    }

    return `https://${domain}/tx/${hash}`
}


async function ethBalance() {
    if (window.web3) {
        return await web3.eth.getBalance(window.def)
    }

    return 0
}

async function getDefaultAddress() {
    if (window.ethDefaultAddress) {
        return window.ethDefaultAddress
    }

    return null
}

async function connectWalletOld() {
    // Modern dapp browsers...

    window.web3 = null;

    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.error('user denied access', error)
            //we should exit
            return
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        return
    }


    //If we get to this point lets spin everything up    
    await networkReady()
    window.ethDefaultAddress = (await window.web3.eth.getAccounts())[0]

    let event

    if (BANKROLL.network == 'BSC'){
        //Init the default contracts
        await initContracts()

        event = new Event("wallet-connected", {bubbles: true});
        window.dispatchEvent(event);
        $('#wallet-connect').text('CONNECTED')
    } else {
        event = new Event("wallet-wrong-network", {bubbles: true});
        window.dispatchEvent(event);
    }
}

async function coingeckoPrice(id){
    let result = null
    let retries = 0 

    if (id == 'busd'){
        return 1
    } else {
        while (retries < 3) {
            try {
                result = (await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`, {timeout: 5000})).data
                break
            } catch(e){
                console.error(e)
                await timeout(1000)
                retries++
                continue
            }
        }

        return (result != null) ? result[id]['usd'] : null
    }
}

/**
 * Setup the orchestra
 */
function init() {

    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum, "window.BinanceChain is", window.BinanceChain);
  
    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
      binancechainwallet: {
        package: true
      },  
      walletconnect: {
        package: WalletConnectProvider,
        options: {
            bridge: "https://bridge.walletconnect.org",
            rpc: {
                56: "https://bsc-dataseed.binance.org"
            },
            network: "binance"
        },
        
      },
      injected: {
        /*  
        display: {
            logo: "data:image/gif;base64,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",
            name: "Injected",
            description: "Connect with the provider in your Web3 Browser"
          },*/ 
         package: null   
      }
      /*
      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_test_391E26A3B43A3350"
        }
      }*/
    };
  
    web3Modal = new Web3Modal({
      theme: "dark",  
      cacheProvider: true, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
  
    console.log("Web3Modal instance is", web3Modal);

    event = new Event("wallet-initialized", {bubbles: true});
    window.dispatchEvent(event);

  }

async function connectReadOnly() {

    window.web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'))
    await networkReady()
    await initContracts()
}


async function showWalletPicker() {
    `
    <button class="" width="100%" id="wallet-connect-metamask" scale="md" style="justify-content: space-between;"><div color="primary" class="">Metamask</div><svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg"><circle cx="48" cy="48" r="48" fill="white"></circle><path d="M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z" fill="#E17726"></path><path d="M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z" fill="#E27625"></path><path d="M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z" fill="#E27625"></path><path d="M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z" fill="#E27625"></path><path d="M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z" fill="#E27625"></path><path d="M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z" fill="#E27625"></path><path d="M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z" fill="#E27625"></path><path d="M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z" fill="#E27625"></path><path d="M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z" fill="#D5BFB2"></path><path d="M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z" fill="#D5BFB2"></path><path d="M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z" fill="#233447"></path><path d="M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z" fill="#233447"></path><path d="M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z" fill="#CC6228"></path><path d="M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z" fill="#CC6228"></path><path d="M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z" fill="#CC6228"></path><path d="M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z" fill="#CC6228"></path><path d="M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z" fill="#E27525"></path><path d="M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z" fill="#E27525"></path><path d="M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z" fill="#E27525"></path><path d="M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z" fill="#E27525"></path><path d="M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z" fill="#F5841F"></path><path d="M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z" fill="#F5841F"></path><path d="M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z" fill="#C0AC9D"></path><path d="M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z" fill="#161616"></path><path d="M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z" fill="#763E1A"></path><path d="M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z" fill="#763E1A"></path><path d="M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z" fill="#F5841F"></path><path d="M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z" fill="#F5841F"></path><path d="M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z" fill="#F5841F"></path></svg></button>
    <button class="" width="100%" id="wallet-connect-binance chain wallet" scale="md" style="justify-content: space-between;"><div color="primary" class="">Binance Chain Wallet</div><svg viewBox="0 0 32 32" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg"><path d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z" fill="#1E2026"></path><path d="M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z" fill="#F0B90B"></path><path d="M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z" fill="#F0B90B"></path><path d="M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z" fill="#F0B90B"></path><path d="M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z" fill="#F0B90B"></path><path d="M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z" fill="#F0B90B"></path><path d="M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z" fill="#F0B90B"></path><path d="M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z" fill="#F0B90B"></path><path d="M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z" fill="#F0B90B"></path><path d="M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z" fill="#F0B90B"></path><path d="M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z" fill="#F0B90B"></path></svg></button>
    
    `
}

async function connectWallet(connectid){
    
    //If the provider is set we are disconnecting; forget the connection
    if (provider != null) {

        if(!_.isUndefined(provider.close)) {
            await provider.close();
        
           
        }

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;

        location.reload()

    }   
    
    else {
    

        console.log("Opening a dialog", web3Modal);
        try {
            provider = await web3Modal.connect();
        } catch(e) {
            console.log("Could not get a wallet connection", e);
            provider = null
        }

        //try fallback to an embed just for better usability across compliant web3 browsers
        if (provider == null){
            provider = window.ethereum || window.BinanceChain 
        }

        if (provider) {
            window.web3 = new Web3(provider);
            try {
                // Request account access if needed
                await provider.enable();
            } catch (error) {
                // User denied account access...
                console.error('user denied access', error)
                showAlert('ACCESS DENIED', 'The user denied access from the wallet or there is an issue detecting the provider.')
                return
            }
        }  else {
            showAlert('WALLET NOT FOUND', 'Could not find a suitable wallet. Please use Metamask, Binance Wallet, or a WalletConnect compatible solution')
            return
        }
        


        //If we get to this point lets spin everything up    
        await networkReady()
        window.ethDefaultAddress = (await window.web3.eth.getAccounts())[0]

        let event

        if (BANKROLL.network == 'BSC'){
            //Init the default contracts
            await initContracts()

            event = new Event("wallet-connected", {bubbles: true});
            window.dispatchEvent(event);
            $('#wallet-connect').text('DISCONNECT')
        } else {
            event = new Event("wallet-wrong-network", {bubbles: true});
            window.dispatchEvent(event);
        }
    }

}


$(document).ready(async () => {
    window.addEventListener('load', async () => {
        init()
    })
})

var currentAddress
var contractAddress, proxyAddress
var graveyardAddress = '0xf7cc784bd260eafc1193d337ffcea4d6dda0dd71'
var uniPairAddress = '0x1cea83ec5e48d9157fcae27a19807bef79195ce1'
var uniPairBUSDAddress = '0x647bc907d520c3f63be38d01dbd979f5606bec48'
var waiting = 0
let buyAmountInp, sellAmountInp, transferAmountInp, buyEstimate, sellEstimate, transferEstimate

var players = {}

var buyEvents = []
var sellEvents = []

var balanceFeed = []
let balanceChart, tronLocal, collateral_price, first_block, contract_timestamp, symbol, padding

let sendOptions = {gasPrice: "10000000000"}

const MAX_INT_HEX =  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

$(document).ready(async () => {
    window.addEventListener('wallet-connected', async () => {
        main();
    })

    window.addEventListener('wallet-initialized', async () => {
        //Auto Connect
        
        if (web3Modal.cachedProvider){
            connectWallet();
        }
    
    })

    window.addEventListener('wallet-wrong-network', async () => {
        showAlert('WRONG NETWORK', 'ELEPHANT.MONEY is built for the Binance Smart Chain (BSC); Network ID 56')
    })
})

async function main() {

    if (!(window.ethDefaultAddress)) {
        waiting += 1;
        console.log('waiting', waiting)
        if (waiting == 50) {
            return
        }
        console.error('Could not connect to Metamask.')
        setTimeout(main, 500);
        return;
    } else {

        console.log('bootstrapping ui')

        //Get price 
        collateral_price = await coingeckoPrice('wbnb')


        currentAddress = window.ethDefaultAddress
        contractAddress = BANKROLL[BANKROLL.network].LiquidityDrive

        let tokenAddress = BANKROLL[BANKROLL.network].Elephant


        $('#contract-url').attr('href', `https://bscscan.com/address/${contractAddress}`)
        $('#contract-url').text(`https://bscscan.com/address/${shortId(contractAddress,5)}`)

        $('#token-url').attr('href', `https://bscscan.com/token/${tokenAddress}`)
        $('#token-url').text(`https://bscscan.com/token/${shortId(tokenAddress,5)}`)

        $('#chart-url').attr('href', `https://poocoin.app/tokens/${tokenAddress}`)
        $('#chart-url').text(`https://poocoin.app/tokens/${shortId(tokenAddress,5)}`)

        userTag(currentAddress)
        console.log('current address', currentAddress)

        

        //First UI render
        mainLoop()
        showStats()

        await bindUI()
       
        // Schedule loops
        setInterval(mainLoop, 5000)
        setInterval(showStats, 5000)
        setInterval(watchSelectedWallet, 2000)
       
        //setTimeout(showWelcome)


    }

}

async function bindUI() {
    let web3js = getWeb3()
    buyAmountInp = $('#buyAmount')
    
    buyEstimate = $('#buy-estimate')

    sellEstimate = $('#sell-estimate')
    sellAmountInp = $('#sellAmount')
    
    let buyTokens = async (e) => {
        try {
            
            let amount = buyAmountInp.val().trim()
            let balance = await web3js.eth.getBalance(currentAddress)
            amount = resolveInputAndBalance(amount, balance)
            
            let elephantAmount = await router.methods.getAmountsOut(web3js.utils.toBN(amount), [BANKROLL[BANKROLL.network].WBNB, BANKROLL[BANKROLL.network].Elephant]).call()
            buyEstimate.html(`${formatSun(amount)} BNB ${approxStr} ${formatElephant(elephantAmount[1])} ELEPHANT`)
        } catch (error) {
            console.error(error)
        }

    }

    let sellTokens = async (e) => {
        try {
            let amount = sellAmountInp.val().trim()
            let balance = await elephant.methods.balanceOf(currentAddress).call()
            
            amount = resolveInputAndBalance(amount, balance, 'gwei')
            let bnbAmount = await router.methods.getAmountsOut(web3js.utils.toBN(amount), [BANKROLL[BANKROLL.network].Elephant, BANKROLL[BANKROLL.network].WBNB]).call()
            sellEstimate.html(`${formatElephant(amount)} ELEPHANT ${approxStr} ${formatSun(bnbAmount[1])} BNB`)
        } catch (e) {
            console.error(e)
        }

    }

    sellAmountInp.on("change paste keyup",  _.debounce(sellTokens, 250))

    $('#stakingChb').change(async (e) => {
        let isStaking = $(e.currentTarget).prop('checked')
        
        if (isStaking) {
            enableStake()
        } else {
            disableStake()
        } 
    

        return false
    })
    
    buyAmountInp.on("change paste keyup",  _.debounce(buyTokens, 250))
}

async function isStakeEnabled() {
    let allowance = await elephant.methods.allowance(currentAddress, router.options.address).call();
    return allowance > 0 ? true : false
}

async function enableStake() {
    let web3js = getWeb3()
    elephant.methods.approve(router.options.address, web3js.utils.toBN(MAX_INT_HEX)).send()
        .on('transactionHash', (tx) => refresh(tx))
        .on('error', (e) => txError(e))
}

async function disableStake() {
    let web3js = getWeb3()
    elephant.methods.approve(router.options.address, web3js.utils.toBN(0)).send()
        .on('transactionHash', (tx) => refresh(tx))
        .on('error', (e) => txError(e))

}

async function buy() {

    //TODO Disable Deposits
    /*
    showAlert('DEPOSITS DISABLED', 'Deposits are temporarily disabled as we migrate to our SMART PROXY TECHNOLOGY. Thank you for your patience.')
    return
    */

    let web3js = getWeb3()

    var amount = $('#buyAmount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
        $('#invalidAmountModal').modal()
    } else {
        let balance = await web3js.eth.getBalance(currentAddress)
        amount = resolveInputAndBalance(amount, balance)

        
        await router.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(
            web3js.utils.toBN(0),
            [BANKROLL[BANKROLL.network].WBNB, BANKROLL[BANKROLL.network].Elephant],
            currentAddress,
            moment().unix() + 60)
            .send({value: amount})
            .on('transactionHash', (tx) => refresh(tx))
            .on('error', (e) => txError(e))
        
    }

    return false;
}

async function sell() {
    let web3js = getWeb3()

    /*
    let isStaking = await isStakeEnabled()

    if (!isStaking) {
        showAlert('Enable Staking', 'Staking is not enabled.  Look for the toggle and make sure it is on (blue)!')
        return
    }
    */

    let amount = $('#sellAmount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
        $('#invalidAmountModal').modal()
    } else {
        
        let balance = await elephant.methods.balanceOf(currentAddress).call()
        amount = resolveInputAndBalance(amount, balance, 'gwei')

       await router.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(
            amount,
            web3js.utils.toBN(0),
            [BANKROLL[BANKROLL.network].Elephant, BANKROLL[BANKROLL.network].WBNB],
            currentAddress,
            moment().unix() + 60)
            .send()
            .on('transactionHash', (tx) => refresh(tx))
            .on('error', (e) => txError(e))
    }

    return false;
}

async function showWelcome() {
    //TODO  Disable toggle and warn until proxy is in place 
       
    let ended = await ldrive.methods.endedOn().call()

    if (ended == 0) {
        showAlert('LIQUIDITY DRIVE EVENT', `Welcome to the ELEPHANT Liquidty Drive Event.  You can deposit as many times as you want to grow your share of the 250T tokens available at the lowest possible price.`)
    } else {
        showAlert('LDE HAS COMPLETED', `The Liquidity Drive Event has ended. You can claim any available tokens now.`)
    }   
}

async function watchSelectedWallet() {
    if ((await window.web3.eth.getAccounts())[0] != currentAddress) {
        location.reload()
        return
    }
}


async function mainLoop() {
    setTimeout(showWalletInfo, 0)
    setTimeout(showUserStats, 0)
}

async function showWalletInfo() {

    let web3js = getWeb3()

    try {
        $('#network').text(BANKROLL.network)
        $('#walletAddress').text(`${shortId(currentAddress, 5)}`)

        $('#walletBalanceValue').text(formatSun(await web3js.eth.getBalance(currentAddress)))
    } catch (e) {
        console.error(e)
    }
}

async function showStats() {
    try {

        let [liquidity, liquidity2, graveyardAmount, supply] =
            await Promise.all(
                [
                    elephant.methods.balanceOf(uniPairAddress).call(),
                    elephant.methods.balanceOf(uniPairBUSDAddress).call(),
                    elephant.methods.balanceOf(graveyardAddress).call(),
                    elephant.methods.totalSupply().call()
                ]
            )

        let stakePercent = graveyardAmount / supply * 100    
        let price = await getElephantPrice(1e9)
        $('#price').text((price * 1000000 /1e18).toFixed(9)) 
        $('#btc-price').text(`$ ${(price * 1e15/21e6 / 1e18).toFixed(2)}`)   
        $('#marketcap').text(formatSun(price * supply / 1e9))
        $('#liquidity').text(formatSun(((price * liquidity) + (price * liquidity2)) * 2 / 1e9))

        $('#graveyard').text(numeral(stakePercent).format('0.000') + ' %')
       

        let startedOn = await elephant.methods.startedOn().call()
        let expires = moment.unix(startedOn).add(7, 'days').fromNow()
        $('#lde-expires').text(`Ends ${expires}`)

        /*if (collateral_price != null) {
            $('#contractBalance-usdt').html(` ${approxStr} ${formatSun(tokenBalance * collateral_price)} USD`)
        }*/

    } catch (e) {
        console.error(e)
    }
}

async function rebalance() {

    let [graveyardAmount, supply] =
            await Promise.all(
                [
                    elephant.methods.balanceOf(graveyardAddress).call(),
                    elephant.methods.totalSupply().call()
                ]
            )

        let stakePercent = graveyardAmount / supply * 100    

    if (stakePercent < 51) {
        showAlert('NOT READY!!!', 'Slow down there buddy, we need the graveyard to go over 51% before we can rebalance!')
        return
    }

    graveyard.methods.rebalance().send()
        .on('transactionHash', (tx) => refresh(tx))
        .on('error', (e) => txError(e))

    return false;
}


async function showUserStats() {
    web3js = getWeb3()
    let [bnbBalance,balance, supply,graveyardAmount] =
        await Promise.all(
            [
                web3js.eth.getBalance(currentAddress),
                elephant.methods.balanceOf(currentAddress).call(),
                elephant.methods.totalSupply().call(),
                elephant.methods.balanceOf(graveyardAddress).call()
            ]
        )


    let stakePercent = balance / (supply - graveyardAmount) * 100
    let price = await getElephantPrice(1e9)

    let isStaking =  await isStakeEnabled()

    $('#staking-status').text(isStaking ? `Enabled` : `Disabled`)
    $('#stakingChb').prop('checked', isStaking)
    $('#user-percentage').text(numeral(stakePercent).format('0.000') + ' %')

    $('.bnb-balance').text(formatSun(bnbBalance))
    $('#user-balance').text(formatElephant(balance))  
    $('.elephant-balance').text(formatElephant(balance))   
    $('#user-balance-usdt').html(`${approxStr} ${formatSun(price * balance / 1e9)} BUSD`)

}


function refresh(tx) {
    $('#txId').html(`<a href="${formatTxUrl(tx)}">${shortId(tx, 5)}</a>`)
    $('#txModal').modal()
    setTimeout(mainLoop)
}

function txError(error) {
    var msg = error.message
    $('#txErrorId').text(msg)
    $('#txErrorModal').modal()
    setTimeout(mainLoop)
}

function showAlert(title, msg) {
    $('#alertTitle').text(title)
    $('#alertId').html(msg)
    $('#alertModal').modal()
}

function showError(msg) {
    $('#errorId').text(msg)
    $('#errorModal').modal()
    setTimeout(mainLoop)
}

function shortId(str, size) {
    return str.substr(0, size) + '...' + str.substr(str.length - size, str.length);
}

/************ Chain Functions *******************/


async function claim() {
    let ended = await ldrive.methods.endedOn().call()
    let available = await ldrive.methods.availableOf(currentAddress).call()
    let tokenAddress = await ldrive.methods.owner().call()
    let claimed = await ldrive.methods.claimedOf(currentAddress).call()

    if (ended == 0) {
        showAlert('DRIVE STILL RUNNING', `Welcome to the ELEPHANT Liquidty Drive Event.  The event is not over yet.  You still have time to increase your share.`)
        return
    } 

    if (available == 0) {
        showAlert('NO AVAILABLE TOKENS', `The LDE is over and deposits were required prior to close. You can purchase ELEPHANT on Pancakeswap by clicking here:
        <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=${tokenAddress}">${tokenAddress}</a>`)
        return
    } 

    if (claimed > 0) {
        showAlert('TOKENS CLAIMED', `${formatElephant(claimed)} ELEPHANT tokens have already been claimed`)
        return
    } 

    ldrive.methods.claimTokens().send()
        .on('transactionHash', (tx) => refresh(tx))
        .on('error', (e) => txError(e))

    return false
}

async function launch(){
    let ready = await elephant.methods.ready().call()
    let launched = await elephant.methods.launched().call()

    if (!ready) {
        showAlert('DRIVE NOT COMPLETE', `The drive isnt' complete, please try again later`)
        return
    } 

    if (launched) {
        showAlert('TOKEN LAUNCHED', `ELEPHANT is officially launched! BRrrrrrrr!`)
        return
    } 

    elephant.methods.launch().send()
        .on('transactionHash', (tx) => refresh(tx))
        .on('error', (e) => txError(e))

    return false

}


async function donate() {

    let web3js = getWeb3()

    var amount = $('#buyAmount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
        $('#invalidAmountModal').modal()
    } else {
        ldrive.methods.donate().send({value: web3js.utils.toBN(web3js.utils.toWei(amount + ''))})
            .on('transactionHash', (tx) => refresh(tx))
            .on('error', (e) => txError(e))

    }

    return false;
}