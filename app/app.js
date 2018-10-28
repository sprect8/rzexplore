'use strict';

const ABI = {
    "contractName": "MOFService",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
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
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "services",
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
            "name": "",
            "type": "address"
          }
        ],
        "name": "balances",
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
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint8"
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
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "allowed",
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
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "mofAddress",
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
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "accounts",
            "type": "address[10]"
          }
        ],
        "name": "registerAuthorisedAccounts",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "registerAuthorisedAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "unauthorise",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "add",
            "type": "address"
          },
          {
            "name": "n",
            "type": "bytes32"
          }
        ],
        "name": "registerService",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "user",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mintForUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "n",
            "type": "bytes32"
          }
        ],
        "name": "getServiceAddress",
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
            "name": "n",
            "type": "bytes32"
          },
          {
            "name": "amount",
            "type": "uint16"
          }
        ],
        "name": "payService",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "success",
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
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
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
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "balance",
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
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
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
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "remaining",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5060008054600160a060020a031916321790556040805180820190915260158082527f4d4f4620496e7465726e616c2043757272656e637900000000000000000000006020909201918252610067916003916100bf565b506040805180820190915260038082527f4d4f46000000000000000000000000000000000000000000000000000000000060209092019182526100ac916005916100bf565b506004805460ff1916600217905561015a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010057805160ff191683800117855561012d565b8280016001018555821561012d579182015b8281111561012d578251825591602001919060010190610112565b5061013992915061013d565b5090565b61015791905b808211156101395760008155600101610143565b90565b610acb806101696000396000f3006080604052600436106101065763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461010b578063095ea7b3146101955780630a043729146101cd5780630a790eb7146101f057806323b872dd1461022457806327e235e31461024e578063313ce5671461028157806343b1128b146102ac5780634df3621b146102d05780635c658165146102ef57806370a082311461031657806380833d781461033757806395d89b4114610358578063a9059cbb1461036d578063c2527b3214610391578063d0dbc833146103a9578063dd62ed3e146103cd578063dfe8da68146103f4578063ec8b817e14610409575b600080fd5b34801561011757600080fd5b5061012061044e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015a578181015183820152602001610142565b50505050905090810190601f1680156101875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a157600080fd5b506101b9600160a060020a03600435166024356104dc565b604080519115158252519081900360200190f35b3480156101d957600080fd5b506101ee600160a060020a0360043516610542565b005b3480156101fc57600080fd5b5061020860043561057d565b60408051600160a060020a039092168252519081900360200190f35b34801561023057600080fd5b506101b9600160a060020a0360043581169060243516604435610598565b34801561025a57600080fd5b5061026f600160a060020a036004351661069c565b60408051918252519081900360200190f35b34801561028d57600080fd5b506102966106ae565b6040805160ff9092168252519081900360200190f35b3480156102b857600080fd5b506101ee600160a060020a03600435166024356106b7565b3480156102dc57600080fd5b506101ee60043561ffff60243516610710565b3480156102fb57600080fd5b5061026f600160a060020a03600435811690602435166107da565b34801561032257600080fd5b5061026f600160a060020a03600435166107f7565b34801561034357600080fd5b506101ee600160a060020a0360043516610812565b34801561036457600080fd5b5061012061084a565b34801561037957600080fd5b506101b9600160a060020a03600435166024356108a5565b34801561039d57600080fd5b5061020860043561092f565b3480156103b557600080fd5b506101ee600160a060020a036004351660243561094a565b3480156103d957600080fd5b5061026f600160a060020a0360043581169060243516610979565b34801561040057600080fd5b506102086109a4565b34801561041557600080fd5b50604080516101408181019092526101ee91369160049161014491908390600a908390839080828437509396506109b395505050505050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b505050505081565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b600054600160a060020a0316331461055957600080fd5b600160a060020a03166000908152600760205260409020805460ff19166001179055565b600660205260009081526040902054600160a060020a031681565b600160a060020a0383166000818152600260209081526040808320338452825280832054938352600190915281205490919083118015906105d95750828110155b15156105e457600080fd5b600160a060020a038085166000908152600160205260408082208054870190559187168152208054849003905560001981101561064657600160a060020a03851660009081526002602090815260408083203384529091529020805484900390555b83600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3506001949350505050565b60016020526000908152604090205481565b60045460ff1681565b3360009081526007602052604090205460ff1615156106d557600080fd5b6000908152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b3360009081526001602052604090205461ffff8216111561073057600080fd5b600082815260066020526040812054600160a060020a03161161075257600080fd5b336000818152600160208181526040808420805461ffff88169081900390915587855260068084528286208054600160a060020a039081168852958552838720805484019055958990528352935481519485529051921693927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b600260209081526000928352604080842090915290825290205481565b600160a060020a031660009081526001602052604090205490565b600054600160a060020a0316331461082957600080fd5b600160a060020a03166000908152600760205260409020805460ff19169055565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104d45780601f106104a9576101008083540402835291602001916104d4565b336000908152600160205260408120548211156108c157600080fd5b33600081815260016020908152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600090815260066020526040902054600160a060020a031690565b6000811161095757600080fd5b600160a060020a03909116600090815260016020526040902080549091019055565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b600054600160a060020a031681565b60008054600160a060020a031633146109cb57600080fd5b5060005b60008260ff8316600a81106109e057fe5b6020020151600160a060020a0316141580156109ff5750600a8160ff16105b15610a9b57600760008360ff8416600a8110610a1757fe5b60209081029190910151600160a060020a031682528101919091526040016000205460ff1615610a93576001600760008460ff8516600a8110610a5657fe5b6020020151600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6001016109cf565b50505600a165627a7a72305820d39f8a64b3af6916956850e2bc0fbb08b4b684f83c767508e4caf18d53cf66a40029",
    "deployedBytecode": "0x6080604052600436106101065763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461010b578063095ea7b3146101955780630a043729146101cd5780630a790eb7146101f057806323b872dd1461022457806327e235e31461024e578063313ce5671461028157806343b1128b146102ac5780634df3621b146102d05780635c658165146102ef57806370a082311461031657806380833d781461033757806395d89b4114610358578063a9059cbb1461036d578063c2527b3214610391578063d0dbc833146103a9578063dd62ed3e146103cd578063dfe8da68146103f4578063ec8b817e14610409575b600080fd5b34801561011757600080fd5b5061012061044e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015a578181015183820152602001610142565b50505050905090810190601f1680156101875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a157600080fd5b506101b9600160a060020a03600435166024356104dc565b604080519115158252519081900360200190f35b3480156101d957600080fd5b506101ee600160a060020a0360043516610542565b005b3480156101fc57600080fd5b5061020860043561057d565b60408051600160a060020a039092168252519081900360200190f35b34801561023057600080fd5b506101b9600160a060020a0360043581169060243516604435610598565b34801561025a57600080fd5b5061026f600160a060020a036004351661069c565b60408051918252519081900360200190f35b34801561028d57600080fd5b506102966106ae565b6040805160ff9092168252519081900360200190f35b3480156102b857600080fd5b506101ee600160a060020a03600435166024356106b7565b3480156102dc57600080fd5b506101ee60043561ffff60243516610710565b3480156102fb57600080fd5b5061026f600160a060020a03600435811690602435166107da565b34801561032257600080fd5b5061026f600160a060020a03600435166107f7565b34801561034357600080fd5b506101ee600160a060020a0360043516610812565b34801561036457600080fd5b5061012061084a565b34801561037957600080fd5b506101b9600160a060020a03600435166024356108a5565b34801561039d57600080fd5b5061020860043561092f565b3480156103b557600080fd5b506101ee600160a060020a036004351660243561094a565b3480156103d957600080fd5b5061026f600160a060020a0360043581169060243516610979565b34801561040057600080fd5b506102086109a4565b34801561041557600080fd5b50604080516101408181019092526101ee91369160049161014491908390600a908390839080828437509396506109b395505050505050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b505050505081565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b600054600160a060020a0316331461055957600080fd5b600160a060020a03166000908152600760205260409020805460ff19166001179055565b600660205260009081526040902054600160a060020a031681565b600160a060020a0383166000818152600260209081526040808320338452825280832054938352600190915281205490919083118015906105d95750828110155b15156105e457600080fd5b600160a060020a038085166000908152600160205260408082208054870190559187168152208054849003905560001981101561064657600160a060020a03851660009081526002602090815260408083203384529091529020805484900390555b83600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3506001949350505050565b60016020526000908152604090205481565b60045460ff1681565b3360009081526007602052604090205460ff1615156106d557600080fd5b6000908152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b3360009081526001602052604090205461ffff8216111561073057600080fd5b600082815260066020526040812054600160a060020a03161161075257600080fd5b336000818152600160208181526040808420805461ffff88169081900390915587855260068084528286208054600160a060020a039081168852958552838720805484019055958990528352935481519485529051921693927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b600260209081526000928352604080842090915290825290205481565b600160a060020a031660009081526001602052604090205490565b600054600160a060020a0316331461082957600080fd5b600160a060020a03166000908152600760205260409020805460ff19169055565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104d45780601f106104a9576101008083540402835291602001916104d4565b336000908152600160205260408120548211156108c157600080fd5b33600081815260016020908152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600090815260066020526040902054600160a060020a031690565b6000811161095757600080fd5b600160a060020a03909116600090815260016020526040902080549091019055565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b600054600160a060020a031681565b60008054600160a060020a031633146109cb57600080fd5b5060005b60008260ff8316600a81106109e057fe5b6020020151600160a060020a0316141580156109ff5750600a8160ff16105b15610a9b57600760008360ff8416600a8110610a1757fe5b60209081029190910151600160a060020a031682528101919091526040016000205460ff1615610a93576001600760008460ff8516600a8110610a5657fe5b6020020151600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6001016109cf565b50505600a165627a7a72305820d39f8a64b3af6916956850e2bc0fbb08b4b684f83c767508e4caf18d53cf66a40029",
    "sourceMap": "317:4446:1:-;;;1262:155;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1293:10:1;:22;;-1:-1:-1;;;;;;1293:22:1;1306:9;1293:22;;;1333:30;;;;;;;;;;;;;;;;;;;;;;;:4;;:30;:::i;:::-;-1:-1:-1;1373:14:1;;;;;;;;;;;;;;;;;;;;;;;:6;;:14;:::i;:::-;-1:-1:-1;1397:8:1;:12;;-1:-1:-1;;1397:12:1;1408:1;1397:12;;;317:4446;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;317:4446:1;;;-1:-1:-1;317:4446:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "317:4446:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;840:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;840:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;840:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4357:256;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4357:256:1;-1:-1:-1;;;;;4357:256:1;;;;;;;;;;;;;;;;;;;;;;;;;2110:122;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2110:122:1;-1:-1:-1;;;;;2110:122:1;;;;;;;1102:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1102:42:1;;;;;;;;;-1:-1:-1;;;;;1102:42:1;;;;;;;;;;;;;;3729:503;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3729:503:1;-1:-1:-1;;;;;3729:503:1;;;;;;;;;;;;435:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;435:44:1;-1:-1:-1;;;;;435:44:1;;;;;;;;;;;;;;;;;;;;;911:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;911:21:1;;;;;;;;;;;;;;;;;;;;;;;2350:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2350:105:1;-1:-1:-1;;;;;2350:105:1;;;;;;;2948:281;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2948:281:1;;;;;;;;;485:64;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;485:64:1;-1:-1:-1;;;;;485:64:1;;;;;;;;;;4238:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4238:113:1;-1:-1:-1;;;;;4238:113:1;;;;;2238:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2238:106:1;-1:-1:-1;;;;;2238:106:1;;;;;982:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;982:20:1;;;;3402:321;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3402:321:1;-1:-1:-1;;;;;3402:321:1;;;;;;;2840:102;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2840:102:1;;;;;2709:125;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2709:125:1;-1:-1:-1;;;;;2709:125:1;;;;;;;4619:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4619:142:1;-1:-1:-1;;;;;4619:142:1;;;;;;;;;;343:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;343:25:1;;;;1783:321;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1783:321:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1783:321:1;;-1:-1:-1;1783:321:1;;-1:-1:-1;;;;;;1783:321:1;840:18;;;;;;;;;;;;;;;-1:-1:-1;;840:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4357:256::-;4456:10;4424:12;4448:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4448:29:1;;;;;;;;;;;:38;;;4501;;;;;;;4424:12;;4448:29;;4456:10;;4501:38;;;;;;;;-1:-1:-1;4602:4:1;4357:256;;;;:::o;2110:122::-;1474:10;;-1:-1:-1;;;;;1474:10:1;1460;:24;1452:33;;;;;;-1:-1:-1;;;;;2191:27:1;;;;;:18;:27;;;;;:34;;-1:-1:-1;;2191:34:1;2221:4;2191:34;;;2110:122::o;1102:42::-;;;;;;;;;;;;-1:-1:-1;;;;;1102:42:1;;:::o;3729:503::-;-1:-1:-1;;;;;3855:14:1;;3811:12;3855:14;;;:7;:14;;;;;;;;3870:10;3855:26;;;;;;;;3899:15;;;:8;:15;;;;;;3811:12;;3855:26;3899:25;-1:-1:-1;3899:25:1;;;:48;;;3941:6;3928:9;:19;;3899:48;3891:57;;;;;;;;-1:-1:-1;;;;;3958:13:1;;;;;;;:8;:13;;;;;;:23;;;;;;3991:15;;;;;;:25;;;;;;;-1:-1:-1;;4030:23:1;;4026:90;;;-1:-1:-1;;;;;4069:14:1;;;;;;:7;:14;;;;;;;;4084:10;4069:26;;;;;;;:36;;;;;;;4026:90;4146:3;-1:-1:-1;;;;;4130:28:1;4139:5;-1:-1:-1;;;;;4130:28:1;;4151:6;4130:28;;;;;;;;;;;;;;;;;;-1:-1:-1;4221:4:1;;3729:503;-1:-1:-1;;;;3729:503:1:o;435:44::-;;;;;;;;;;;;;:::o;911:21::-;;;;;;:::o;2350:105::-;1570:10;1551:30;;;;:18;:30;;;;;;;;1543:39;;;;;;;;2431:11;;;;:8;:11;;;;;:17;;-1:-1:-1;;2431:17:1;-1:-1:-1;;;;;2431:17:1;;;;;;;;;;2350:105::o;2948:281::-;3028:10;3019:20;;;;:8;:20;;;;;;:30;;;-1:-1:-1;3019:30:1;3011:39;;;;;;3082:1;3068:11;;;:8;:11;;;;;;-1:-1:-1;;;;;3068:11:1;:15;3060:24;;;;;;3104:10;3095:20;;;;:8;:20;;;;;;;;:30;;;;;;;;;;;;3144:11;;;:8;:11;;;;;;;;-1:-1:-1;;;;;3144:11:1;;;3135:21;;;;;;;;:31;;;;;;3202:11;;;;;;;;3181:41;;;;;;;3202:11;;;3104:10;3181:41;;;;;;;;;;;2948:281;;:::o;485:64::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;4238:113::-;-1:-1:-1;;;;;4328:16:1;4294:15;4328:16;;;:8;:16;;;;;;;4238:113::o;2238:106::-;1474:10;;-1:-1:-1;;;;;1474:10:1;1460;:24;1452:33;;;;;;-1:-1:-1;;;;;2310:27:1;;;;;:18;:27;;;;;2303:34;;-1:-1:-1;;2303:34:1;;;2238:106::o;982:20::-;;;;;;;;;;;;;;;-1:-1:-1;;982:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3402:321;3506:10;3465:12;3497:20;;;:8;:20;;;;;;:30;-1:-1:-1;3497:30:1;3489:39;;;;;;3547:10;3538:20;;;;:8;:20;;;;;;;;:30;;;;;;;-1:-1:-1;;;;;3578:13:1;;;;;;;;;:23;;;;;;3616:33;;;;;;;3578:13;;3547:10;3616:33;;;;;;;;;;;-1:-1:-1;3712:4:1;3402:321;;;;:::o;2840:102::-;2898:7;2924:11;;;:8;:11;;;;;;-1:-1:-1;;;;;2924:11:1;;2840:102::o;2709:125::-;2791:1;2782:10;;2774:19;;;;;;-1:-1:-1;;;;;2803:14:1;;;;;;;:8;:14;;;;;:24;;;;;;;2709:125::o;4619:142::-;-1:-1:-1;;;;;4729:15:1;;;4693:17;4729:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;4619:142::o;343:25::-;;;-1:-1:-1;;;;;343:25:1;;:::o;1783:321::-;1870:9;1474:10;;-1:-1:-1;;;;;1474:10:1;1460;:24;1452:33;;;;;;-1:-1:-1;1882:1:1;1893:204;1925:1;1900:8;:13;;;;;;;;;;;;;;-1:-1:-1;;;;;1900:27:1;;;:39;;;;;1937:2;1931:3;:8;;;1900:39;1893:204;;;1959:18;:33;1978:8;:13;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1959:33:1;;;;;;;;;;;-1:-1:-1;1959:33:1;;;;1955:112;;;2048:4;2012:18;:33;2031:8;:13;;;;;;;;;;;;;;-1:-1:-1;;;;;2012:33:1;-1:-1:-1;;;;;2012:33:1;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1955:112;2080:6;;1893:204;;;1783:321;;:::o",
    "source": "pragma solidity ^0.4.20;\n\n// accounts\n// payments\n// \n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract MOFService {\n    address public mofAddress;\n\n    \n    uint256 constant private MAX_UINT256 = 2**256 - 1;\n    mapping (address => uint256) public balances;\n    mapping (address => mapping (address => uint256)) public allowed;\n\n\n/*\n    NOTE:\n    The following variables are OPTIONAL vanities. One does not have to include them.\n    They allow one to customise the token contract & in no way influences the core functionality.\n    Some wallets/interfaces might not even bother to look at this information.\n    */\n    string public name;                   //fancy name: eg Simon Bucks\n    uint8 public decimals;                //How many decimals to show.\n    string public symbol;                 //An identifier: eg SBX\n    \n\n    // these are the list of available services\n    mapping (bytes32=>address) public services;\n\n    // accounts that are permitted to print more cash\n    mapping (address=>bool) private authorisedAccounts;\n\n    constructor() public {\n        mofAddress = tx.origin;        \n        name = \"MOF Internal Currency\";\n        symbol = \"MOF\";\n        decimals = 2;\n\n    }\n\n    modifier onlyOwner {\n        require(msg.sender == mofAddress);\n        _;\n    }\n\n    modifier onlyAuthorised {\n        require(authorisedAccounts[msg.sender]);\n        _;\n    }\n\n    // authorised accounts work on behalf of the owner. we don't use owner accounts, only authorised accounts\n    // compromised authorised accounts can be removed by the owner\n    function registerAuthorisedAccounts (address[10] accounts ) public onlyOwner {\n        uint8 idx = 0;\n        while (accounts[idx] != address(0) && idx < 10) {\n            if (authorisedAccounts[accounts[idx]]) {\n                authorisedAccounts[accounts[idx]] = true;\n            }\n            idx ++;\n        } \n    }\n\n    function registerAuthorisedAccount (address account ) public onlyOwner {\n        authorisedAccounts[account] = true;\n    }\n\n    function unauthorise(address account) public onlyOwner {\n        delete authorisedAccounts[account];\n    }\n\n    function registerService(address add, bytes32 n) public onlyAuthorised {\n        services[n] = add;\n    }\n\n    // NOTE: for demo purpose we allow any user to mint\n    // in reality we should limit by only authorised users\n    // problem is; if we do that we need a service running that will\n    // be triggered to mint\n    // we don't have such a service\n    function mintForUser(address user, uint amount) public {\n        require(amount > 0);\n        balances[user] += amount;\n    }\n\n    function getServiceAddress(bytes32 n) public view returns(address) {\n        return services[n];\n    }\n\n    function payService(bytes32 n, uint16 amount) public {\n        require(balances[msg.sender] >= amount);\n        require(services[n] > 0);\n\n        balances[msg.sender] -= amount;\n        balances[services[n]] += amount;\n        emit Transfer(msg.sender, services[n], amount);\n    }\n\n    event Transfer(address indexed _from, address indexed _to, uint256 _value);\n    event Approval(address indexed _owner, address indexed _spender, uint256 _value);\n\n    function transfer(address _to, uint256 _value) public returns (bool success) {\n        require(balances[msg.sender] >= _value);\n        balances[msg.sender] -= _value;\n        balances[_to] += _value;\n        emit Transfer(msg.sender, _to, _value); //solhint-disable-line indent, no-unused-vars\n        return true;\n    }\n\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {\n        uint256 allowance = allowed[_from][msg.sender];\n        require(balances[_from] >= _value && allowance >= _value);\n        balances[_to] += _value;\n        balances[_from] -= _value;\n        if (allowance < MAX_UINT256) {\n            allowed[_from][msg.sender] -= _value;\n        }\n        emit Transfer(_from, _to, _value); //solhint-disable-line indent, no-unused-vars\n        return true;\n    }\n\n    function balanceOf(address _owner) public view returns (uint256 balance) {\n        return balances[_owner];\n    }\n\n    function approve(address _spender, uint256 _value) public returns (bool success) {\n        allowed[msg.sender][_spender] = _value;\n        emit Approval(msg.sender, _spender, _value); //solhint-disable-line indent, no-unused-vars\n        return true;\n    }\n\n    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {\n        return allowed[_owner][_spender];\n    }\n}",
    "sourcePath": "C:\\dev\\russel-api\\contracts\\MOFService.sol",
    "ast": {
      "absolutePath": "/C/dev/russel-api/contracts/MOFService.sol",
      "exportedSymbols": {
        "MOFService": [
          444
        ]
      },
      "id": 445,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 18,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".20"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 444,
          "linearizedBaseContracts": [
            444
          ],
          "name": "MOFService",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 20,
              "name": "mofAddress",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "343:25:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 19,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "343:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": true,
              "id": 27,
              "name": "MAX_UINT256",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "380:49:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 21,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "380:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9935"
                },
                "id": 26,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                  },
                  "id": 24,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "leftExpression": {
                    "argumentTypes": null,
                    "hexValue": "32",
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "419:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_2_by_1",
                      "typeString": "int_const 2"
                    },
                    "value": "2"
                  },
                  "nodeType": "BinaryOperation",
                  "operator": "**",
                  "rightExpression": {
                    "argumentTypes": null,
                    "hexValue": "323536",
                    "id": 23,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "422:3:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_256_by_1",
                      "typeString": "int_const 256"
                    },
                    "value": "256"
                  },
                  "src": "419:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                  }
                },
                "nodeType": "BinaryOperation",
                "operator": "-",
                "rightExpression": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 25,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "428:1:1",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "src": "419:10:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9935"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 31,
              "name": "balances",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "435:44:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 30,
                "keyType": {
                  "id": 28,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "444:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "435:28:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 29,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 37,
              "name": "allowed",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "485:64:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "typeName": {
                "id": 36,
                "keyType": {
                  "id": 32,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "494:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "485:49:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 35,
                  "keyType": {
                    "id": 33,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "505:28:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 34,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 39,
              "name": "name",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "840:18:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 38,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "840:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 41,
              "name": "decimals",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "911:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              },
              "typeName": {
                "id": 40,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "911:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 43,
              "name": "symbol",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "982:20:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 42,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "982:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 47,
              "name": "services",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "1102:42:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                "typeString": "mapping(bytes32 => address)"
              },
              "typeName": {
                "id": 46,
                "keyType": {
                  "id": 44,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1111:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "1102:26:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                  "typeString": "mapping(bytes32 => address)"
                },
                "valueType": {
                  "id": 45,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1120:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 51,
              "name": "authorisedAccounts",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "1205:50:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 50,
                "keyType": {
                  "id": 48,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1214:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1205:23:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 49,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1223:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 71,
                "nodeType": "Block",
                "src": "1283:134:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 57,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "mofAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20,
                        "src": "1293:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 55,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 528,
                          "src": "1306:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 56,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1306:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1293:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 58,
                    "nodeType": "ExpressionStatement",
                    "src": "1293:22:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 61,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "1333:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "4d4f4620496e7465726e616c2043757272656e6379",
                        "id": 60,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1340:23:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_22f506051be98996799085ba73635b10ef26d42d4faea1bdd3a2e5c5a080d4b2",
                          "typeString": "literal_string \"MOF Internal Currency\""
                        },
                        "value": "MOF Internal Currency"
                      },
                      "src": "1333:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 62,
                    "nodeType": "ExpressionStatement",
                    "src": "1333:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 65,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "symbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "1373:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "4d4f46",
                        "id": 64,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1382:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9b96db0e5fdfd48da5754a7670df24f596c4ac701fa69e18b12039f3ef2bf69b",
                          "typeString": "literal_string \"MOF\""
                        },
                        "value": "MOF"
                      },
                      "src": "1373:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 66,
                    "nodeType": "ExpressionStatement",
                    "src": "1373:14:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 67,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "1397:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1408:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "1397:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 70,
                    "nodeType": "ExpressionStatement",
                    "src": "1397:12:1"
                  }
                ]
              },
              "documentation": null,
              "id": 72,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 52,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1273:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 53,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1283:0:1"
              },
              "scope": 444,
              "src": "1262:155:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 82,
                "nodeType": "Block",
                "src": "1442:61:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 78,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 75,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 516,
                              "src": "1460:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1460:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 77,
                            "name": "mofAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20,
                            "src": "1474:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1460:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 74,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "1452:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 79,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1452:33:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 80,
                    "nodeType": "ExpressionStatement",
                    "src": "1452:33:1"
                  },
                  {
                    "id": 81,
                    "nodeType": "PlaceholderStatement",
                    "src": "1495:1:1"
                  }
                ]
              },
              "documentation": null,
              "id": 83,
              "name": "onlyOwner",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 73,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1442:0:1"
              },
              "src": "1423:80:1",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 93,
                "nodeType": "Block",
                "src": "1533:67:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 86,
                            "name": "authorisedAccounts",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51,
                            "src": "1551:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 89,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 87,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 516,
                              "src": "1570:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 88,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1570:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1551:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 85,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "1543:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 90,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1543:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 91,
                    "nodeType": "ExpressionStatement",
                    "src": "1543:39:1"
                  },
                  {
                    "id": 92,
                    "nodeType": "PlaceholderStatement",
                    "src": "1592:1:1"
                  }
                ]
              },
              "documentation": null,
              "id": 94,
              "name": "onlyAuthorised",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 84,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1533:0:1"
              },
              "src": "1509:91:1",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 138,
                "nodeType": "Block",
                "src": "1860:244:1",
                "statements": [
                  {
                    "assignments": [
                      104
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 104,
                        "name": "idx",
                        "nodeType": "VariableDeclaration",
                        "scope": 139,
                        "src": "1870:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 103,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "1870:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 106,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1882:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1870:13:1"
                  },
                  {
                    "body": {
                      "id": 136,
                      "nodeType": "Block",
                      "src": "1941:156:1",
                      "statements": [
                        {
                          "condition": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 118,
                              "name": "authorisedAccounts",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51,
                              "src": "1959:18:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 122,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 119,
                                "name": "accounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 98,
                                "src": "1978:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                                  "typeString": "address[10] memory"
                                }
                              },
                              "id": 121,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 120,
                                "name": "idx",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 104,
                                "src": "1987:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1978:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1959:33:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 132,
                          "nodeType": "IfStatement",
                          "src": "1955:112:1",
                          "trueBody": {
                            "id": 131,
                            "nodeType": "Block",
                            "src": "1994:73:1",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 129,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 123,
                                      "name": "authorisedAccounts",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 51,
                                      "src": "2012:18:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                        "typeString": "mapping(address => bool)"
                                      }
                                    },
                                    "id": 127,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 124,
                                        "name": "accounts",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 98,
                                        "src": "2031:8:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                                          "typeString": "address[10] memory"
                                        }
                                      },
                                      "id": 126,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 125,
                                        "name": "idx",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 104,
                                        "src": "2040:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "2031:13:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "2012:33:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "hexValue": "74727565",
                                    "id": 128,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2048:4:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  "src": "2012:40:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 130,
                                "nodeType": "ExpressionStatement",
                                "src": "2012:40:1"
                              }
                            ]
                          }
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "2080:6:1",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 133,
                              "name": "idx",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 104,
                              "src": "2080:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "id": 135,
                          "nodeType": "ExpressionStatement",
                          "src": "2080:6:1"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "accounts",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 98,
                            "src": "1900:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                              "typeString": "address[10] memory"
                            }
                          },
                          "id": 109,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 108,
                            "name": "idx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 104,
                            "src": "1909:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1900:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1925:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 110,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1917:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1917:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1900:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 114,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 104,
                          "src": "1931:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3130",
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1937:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "1931:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1900:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 137,
                    "nodeType": "WhileStatement",
                    "src": "1893:204:1"
                  }
                ]
              },
              "documentation": null,
              "id": 139,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 101,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 100,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 83,
                    "src": "1850:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1850:9:1"
                }
              ],
              "name": "registerAuthorisedAccounts",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 99,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 98,
                    "name": "accounts",
                    "nodeType": "VariableDeclaration",
                    "scope": 139,
                    "src": "1820:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                      "typeString": "address[10]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 95,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1820:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 97,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1828:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        },
                        "value": "10"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "1820:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$10_storage_ptr",
                        "typeString": "address[10]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1819:23:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 102,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1860:0:1"
              },
              "scope": 444,
              "src": "1783:321:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 152,
                "nodeType": "Block",
                "src": "2181:51:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 146,
                          "name": "authorisedAccounts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51,
                          "src": "2191:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 148,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 147,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 141,
                          "src": "2210:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2191:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 149,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2221:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "2191:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 151,
                    "nodeType": "ExpressionStatement",
                    "src": "2191:34:1"
                  }
                ]
              },
              "documentation": null,
              "id": 153,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 144,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 143,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 83,
                    "src": "2171:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2171:9:1"
                }
              ],
              "name": "registerAuthorisedAccount",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 142,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 141,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "scope": 153,
                    "src": "2146:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 140,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2146:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2145:18:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 145,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2181:0:1"
              },
              "scope": 444,
              "src": "2110:122:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 165,
                "nodeType": "Block",
                "src": "2293:51:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "delete",
                      "prefix": true,
                      "src": "2303:34:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 160,
                          "name": "authorisedAccounts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51,
                          "src": "2310:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 162,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 161,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 155,
                          "src": "2329:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2310:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 164,
                    "nodeType": "ExpressionStatement",
                    "src": "2303:34:1"
                  }
                ]
              },
              "documentation": null,
              "id": 166,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 158,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 157,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 83,
                    "src": "2283:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2283:9:1"
                }
              ],
              "name": "unauthorise",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 156,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 155,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "scope": 166,
                    "src": "2259:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 154,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2259:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2258:17:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 159,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2293:0:1"
              },
              "scope": 444,
              "src": "2238:106:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 181,
                "nodeType": "Block",
                "src": "2421:34:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 175,
                          "name": "services",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47,
                          "src": "2431:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                            "typeString": "mapping(bytes32 => address)"
                          }
                        },
                        "id": 177,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 176,
                          "name": "n",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 170,
                          "src": "2440:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2431:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 178,
                        "name": "add",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 168,
                        "src": "2445:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2431:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 180,
                    "nodeType": "ExpressionStatement",
                    "src": "2431:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 182,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 173,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 172,
                    "name": "onlyAuthorised",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 94,
                    "src": "2406:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2406:14:1"
                }
              ],
              "name": "registerService",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 171,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 168,
                    "name": "add",
                    "nodeType": "VariableDeclaration",
                    "scope": 182,
                    "src": "2375:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 167,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2375:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 170,
                    "name": "n",
                    "nodeType": "VariableDeclaration",
                    "scope": 182,
                    "src": "2388:9:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 169,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2388:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2374:24:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 174,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2421:0:1"
              },
              "scope": 444,
              "src": "2350:105:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 201,
                "nodeType": "Block",
                "src": "2764:70:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 190,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "2782:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2791:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2782:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 189,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "2774:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2774:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 194,
                    "nodeType": "ExpressionStatement",
                    "src": "2774:19:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 195,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "2803:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 197,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 196,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 184,
                          "src": "2812:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2803:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "2821:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2803:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 200,
                    "nodeType": "ExpressionStatement",
                    "src": "2803:24:1"
                  }
                ]
              },
              "documentation": null,
              "id": 202,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "mintForUser",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 187,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 184,
                    "name": "user",
                    "nodeType": "VariableDeclaration",
                    "scope": 202,
                    "src": "2730:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 183,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2730:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 186,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 202,
                    "src": "2744:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 185,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2744:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2729:27:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 188,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2764:0:1"
              },
              "scope": 444,
              "src": "2709:125:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 213,
                "nodeType": "Block",
                "src": "2907:35:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 209,
                        "name": "services",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "2924:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                          "typeString": "mapping(bytes32 => address)"
                        }
                      },
                      "id": 211,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 210,
                        "name": "n",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "2933:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2924:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 208,
                    "id": 212,
                    "nodeType": "Return",
                    "src": "2917:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 214,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getServiceAddress",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 205,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 204,
                    "name": "n",
                    "nodeType": "VariableDeclaration",
                    "scope": 214,
                    "src": "2867:9:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 203,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2867:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2866:11:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 208,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 207,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 214,
                    "src": "2898:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 206,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2898:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2897:9:1"
              },
              "scope": 444,
              "src": "2840:102:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 262,
                "nodeType": "Block",
                "src": "3001:228:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 227,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 222,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "3019:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 225,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 223,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 516,
                                "src": "3028:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3028:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3019:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 226,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 218,
                            "src": "3043:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3019:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 221,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3011:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3011:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 229,
                    "nodeType": "ExpressionStatement",
                    "src": "3011:39:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 231,
                              "name": "services",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47,
                              "src": "3068:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                                "typeString": "mapping(bytes32 => address)"
                              }
                            },
                            "id": 233,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 232,
                              "name": "n",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 216,
                              "src": "3077:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3068:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 234,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3082:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3068:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 230,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3060:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 236,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3060:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 237,
                    "nodeType": "ExpressionStatement",
                    "src": "3060:24:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 238,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3095:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 241,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 239,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3104:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3104:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3095:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "-=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 242,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 218,
                        "src": "3119:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      },
                      "src": "3095:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 244,
                    "nodeType": "ExpressionStatement",
                    "src": "3095:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 251,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 245,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3135:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 249,
                        "indexExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 246,
                            "name": "services",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47,
                            "src": "3144:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                              "typeString": "mapping(bytes32 => address)"
                            }
                          },
                          "id": 248,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 247,
                            "name": "n",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 216,
                            "src": "3153:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3144:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3135:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 250,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 218,
                        "src": "3160:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      },
                      "src": "3135:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 252,
                    "nodeType": "ExpressionStatement",
                    "src": "3135:31:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3190:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3190:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 256,
                            "name": "services",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47,
                            "src": "3202:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                              "typeString": "mapping(bytes32 => address)"
                            }
                          },
                          "id": 258,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 257,
                            "name": "n",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 216,
                            "src": "3211:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3202:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 259,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 218,
                          "src": "3215:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        ],
                        "id": 253,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 271,
                        "src": "3181:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3181:41:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 261,
                    "nodeType": "EmitStatement",
                    "src": "3176:46:1"
                  }
                ]
              },
              "documentation": null,
              "id": 263,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "payService",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 219,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 216,
                    "name": "n",
                    "nodeType": "VariableDeclaration",
                    "scope": 263,
                    "src": "2968:9:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 215,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2968:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 218,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 263,
                    "src": "2979:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    },
                    "typeName": {
                      "id": 217,
                      "name": "uint16",
                      "nodeType": "ElementaryTypeName",
                      "src": "2979:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2967:26:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 220,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3001:0:1"
              },
              "scope": 444,
              "src": "2948:281:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 271,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 270,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 265,
                    "indexed": true,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 271,
                    "src": "3250:21:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 264,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3250:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 267,
                    "indexed": true,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 271,
                    "src": "3273:19:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3273:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 269,
                    "indexed": false,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 271,
                    "src": "3294:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 268,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3294:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3249:60:1"
              },
              "src": "3235:75:1"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 279,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 278,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 273,
                    "indexed": true,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 279,
                    "src": "3330:22:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 272,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3330:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 275,
                    "indexed": true,
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 279,
                    "src": "3354:24:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 274,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3354:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 277,
                    "indexed": false,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 279,
                    "src": "3380:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 276,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3380:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3329:66:1"
              },
              "src": "3315:81:1"
            },
            {
              "body": {
                "id": 319,
                "nodeType": "Block",
                "src": "3479:244:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 289,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "3497:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 292,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 290,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 516,
                                "src": "3506:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 291,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3506:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3497:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 293,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 283,
                            "src": "3521:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3497:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 288,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3489:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3489:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 296,
                    "nodeType": "ExpressionStatement",
                    "src": "3489:39:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 302,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 297,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3538:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 300,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 298,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3547:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3547:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3538:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "-=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 301,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "3562:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3538:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 303,
                    "nodeType": "ExpressionStatement",
                    "src": "3538:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 304,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3578:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 306,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 305,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 281,
                          "src": "3587:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3578:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 307,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "3595:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3578:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 309,
                    "nodeType": "ExpressionStatement",
                    "src": "3578:23:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 311,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3625:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 312,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3625:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 313,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 281,
                          "src": "3637:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 314,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "3642:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 310,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 271,
                        "src": "3616:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3616:33:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 316,
                    "nodeType": "EmitStatement",
                    "src": "3611:38:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 317,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3712:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 287,
                    "id": 318,
                    "nodeType": "Return",
                    "src": "3705:11:1"
                  }
                ]
              },
              "documentation": null,
              "id": 320,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 284,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 281,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 320,
                    "src": "3420:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 280,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3420:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 283,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 320,
                    "src": "3433:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 282,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3433:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3419:29:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 287,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 286,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 320,
                    "src": "3465:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 285,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3465:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3464:14:1"
              },
              "scope": 444,
              "src": "3402:321:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 386,
                "nodeType": "Block",
                "src": "3825:407:1",
                "statements": [
                  {
                    "assignments": [
                      332
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 332,
                        "name": "allowance",
                        "nodeType": "VariableDeclaration",
                        "scope": 387,
                        "src": "3835:17:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 331,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3835:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 339,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 333,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "3855:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 335,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 334,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 322,
                          "src": "3863:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3855:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 338,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 336,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 516,
                          "src": "3870:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3870:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3855:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3835:46:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 349,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 345,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 341,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31,
                                "src": "3899:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 343,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 342,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 322,
                                "src": "3908:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3899:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 344,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 326,
                              "src": "3918:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3899:25:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 348,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 346,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 332,
                              "src": "3928:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 347,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 326,
                              "src": "3941:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3928:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3899:48:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 340,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3891:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3891:57:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 351,
                    "nodeType": "ExpressionStatement",
                    "src": "3891:57:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 352,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3958:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 354,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 353,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "3967:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3958:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 355,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "3975:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3958:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 357,
                    "nodeType": "ExpressionStatement",
                    "src": "3958:23:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 358,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3991:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 360,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 359,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 322,
                          "src": "4000:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3991:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "-=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 361,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "4010:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3991:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 363,
                    "nodeType": "ExpressionStatement",
                    "src": "3991:25:1"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 366,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 364,
                        "name": "allowance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 332,
                        "src": "4030:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 365,
                        "name": "MAX_UINT256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27,
                        "src": "4042:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4030:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 377,
                    "nodeType": "IfStatement",
                    "src": "4026:90:1",
                    "trueBody": {
                      "id": 376,
                      "nodeType": "Block",
                      "src": "4055:61:1",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 374,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 367,
                                  "name": "allowed",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 37,
                                  "src": "4069:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 371,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 368,
                                  "name": "_from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 322,
                                  "src": "4077:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "4069:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 372,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 369,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 516,
                                  "src": "4084:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 370,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4084:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "4069:26:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "-=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "id": 373,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 326,
                              "src": "4099:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4069:36:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 375,
                          "nodeType": "ExpressionStatement",
                          "src": "4069:36:1"
                        }
                      ]
                    }
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 379,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 322,
                          "src": "4139:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 380,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "4146:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 381,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "4151:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 378,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 271,
                        "src": "4130:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 382,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4130:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 383,
                    "nodeType": "EmitStatement",
                    "src": "4125:33:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4221:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 330,
                    "id": 385,
                    "nodeType": "Return",
                    "src": "4214:11:1"
                  }
                ]
              },
              "documentation": null,
              "id": 387,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 327,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 322,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3751:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 321,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3751:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 324,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3766:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 323,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3766:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 326,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3779:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 325,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3779:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3750:44:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 330,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 329,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3811:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 328,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3811:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3810:14:1"
              },
              "scope": 444,
              "src": "3729:503:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 398,
                "nodeType": "Block",
                "src": "4311:40:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 394,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31,
                        "src": "4328:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 396,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 395,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 389,
                        "src": "4337:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4328:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 393,
                    "id": 397,
                    "nodeType": "Return",
                    "src": "4321:23:1"
                  }
                ]
              },
              "documentation": null,
              "id": 399,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 390,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 389,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "4257:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 388,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4257:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4256:16:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 393,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 392,
                    "name": "balance",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "4294:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 391,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4294:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4293:17:1"
              },
              "scope": 444,
              "src": "4238:113:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 426,
                "nodeType": "Block",
                "src": "4438:175:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 415,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 408,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "4448:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 412,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 409,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 516,
                              "src": "4456:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4456:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4448:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 413,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 411,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 401,
                          "src": "4468:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4448:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 414,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "4480:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4448:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 416,
                    "nodeType": "ExpressionStatement",
                    "src": "4448:38:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 418,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "4510:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4510:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 420,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 401,
                          "src": "4522:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 403,
                          "src": "4532:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 417,
                        "name": "Approval",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 279,
                        "src": "4501:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4501:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 423,
                    "nodeType": "EmitStatement",
                    "src": "4496:43:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4602:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 407,
                    "id": 425,
                    "nodeType": "Return",
                    "src": "4595:11:1"
                  }
                ]
              },
              "documentation": null,
              "id": 427,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 404,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 401,
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "4374:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 400,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4374:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 403,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "4392:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 402,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4392:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4373:34:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 407,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 406,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "4424:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 405,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4424:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4423:14:1"
              },
              "scope": 444,
              "src": "4357:256:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 442,
                "nodeType": "Block",
                "src": "4712:49:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 436,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "4729:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 438,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 437,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 429,
                          "src": "4737:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4729:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 440,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 439,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 431,
                        "src": "4745:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4729:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 435,
                    "id": 441,
                    "nodeType": "Return",
                    "src": "4722:32:1"
                  }
                ]
              },
              "documentation": null,
              "id": 443,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 432,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 429,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "4638:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 428,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4638:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 431,
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "4654:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 430,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4654:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4637:34:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 435,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 434,
                    "name": "remaining",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "4693:17:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 433,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4693:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4692:19:1"
              },
              "scope": 444,
              "src": "4619:142:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 445,
          "src": "317:4446:1"
        }
      ],
      "src": "0:4763:1"
    },
    "legacyAST": {
      "absolutePath": "/C/dev/russel-api/contracts/MOFService.sol",
      "exportedSymbols": {
        "MOFService": [
          444
        ]
      },
      "id": 445,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 18,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".20"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 444,
          "linearizedBaseContracts": [
            444
          ],
          "name": "MOFService",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 20,
              "name": "mofAddress",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "343:25:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 19,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "343:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": true,
              "id": 27,
              "name": "MAX_UINT256",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "380:49:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 21,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "380:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9935"
                },
                "id": 26,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                  },
                  "id": 24,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "leftExpression": {
                    "argumentTypes": null,
                    "hexValue": "32",
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "419:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_2_by_1",
                      "typeString": "int_const 2"
                    },
                    "value": "2"
                  },
                  "nodeType": "BinaryOperation",
                  "operator": "**",
                  "rightExpression": {
                    "argumentTypes": null,
                    "hexValue": "323536",
                    "id": 23,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "422:3:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_256_by_1",
                      "typeString": "int_const 256"
                    },
                    "value": "256"
                  },
                  "src": "419:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                  }
                },
                "nodeType": "BinaryOperation",
                "operator": "-",
                "rightExpression": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 25,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "428:1:1",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "src": "419:10:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9935"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 31,
              "name": "balances",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "435:44:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 30,
                "keyType": {
                  "id": 28,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "444:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "435:28:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 29,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 37,
              "name": "allowed",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "485:64:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "typeName": {
                "id": 36,
                "keyType": {
                  "id": 32,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "494:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "485:49:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 35,
                  "keyType": {
                    "id": 33,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "505:28:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 34,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 39,
              "name": "name",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "840:18:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 38,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "840:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 41,
              "name": "decimals",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "911:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              },
              "typeName": {
                "id": 40,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "911:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 43,
              "name": "symbol",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "982:20:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 42,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "982:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 47,
              "name": "services",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "1102:42:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                "typeString": "mapping(bytes32 => address)"
              },
              "typeName": {
                "id": 46,
                "keyType": {
                  "id": 44,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1111:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "1102:26:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                  "typeString": "mapping(bytes32 => address)"
                },
                "valueType": {
                  "id": 45,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1120:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 51,
              "name": "authorisedAccounts",
              "nodeType": "VariableDeclaration",
              "scope": 444,
              "src": "1205:50:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 50,
                "keyType": {
                  "id": 48,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1214:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1205:23:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 49,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1223:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 71,
                "nodeType": "Block",
                "src": "1283:134:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 57,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "mofAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20,
                        "src": "1293:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 55,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 528,
                          "src": "1306:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 56,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1306:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1293:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 58,
                    "nodeType": "ExpressionStatement",
                    "src": "1293:22:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 61,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "1333:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "4d4f4620496e7465726e616c2043757272656e6379",
                        "id": 60,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1340:23:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_22f506051be98996799085ba73635b10ef26d42d4faea1bdd3a2e5c5a080d4b2",
                          "typeString": "literal_string \"MOF Internal Currency\""
                        },
                        "value": "MOF Internal Currency"
                      },
                      "src": "1333:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 62,
                    "nodeType": "ExpressionStatement",
                    "src": "1333:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 65,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "symbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "1373:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "4d4f46",
                        "id": 64,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1382:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9b96db0e5fdfd48da5754a7670df24f596c4ac701fa69e18b12039f3ef2bf69b",
                          "typeString": "literal_string \"MOF\""
                        },
                        "value": "MOF"
                      },
                      "src": "1373:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 66,
                    "nodeType": "ExpressionStatement",
                    "src": "1373:14:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 67,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "1397:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1408:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "1397:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 70,
                    "nodeType": "ExpressionStatement",
                    "src": "1397:12:1"
                  }
                ]
              },
              "documentation": null,
              "id": 72,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 52,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1273:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 53,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1283:0:1"
              },
              "scope": 444,
              "src": "1262:155:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 82,
                "nodeType": "Block",
                "src": "1442:61:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 78,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 75,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 516,
                              "src": "1460:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1460:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 77,
                            "name": "mofAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20,
                            "src": "1474:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1460:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 74,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "1452:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 79,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1452:33:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 80,
                    "nodeType": "ExpressionStatement",
                    "src": "1452:33:1"
                  },
                  {
                    "id": 81,
                    "nodeType": "PlaceholderStatement",
                    "src": "1495:1:1"
                  }
                ]
              },
              "documentation": null,
              "id": 83,
              "name": "onlyOwner",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 73,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1442:0:1"
              },
              "src": "1423:80:1",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 93,
                "nodeType": "Block",
                "src": "1533:67:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 86,
                            "name": "authorisedAccounts",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51,
                            "src": "1551:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 89,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 87,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 516,
                              "src": "1570:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 88,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1570:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1551:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 85,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "1543:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 90,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1543:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 91,
                    "nodeType": "ExpressionStatement",
                    "src": "1543:39:1"
                  },
                  {
                    "id": 92,
                    "nodeType": "PlaceholderStatement",
                    "src": "1592:1:1"
                  }
                ]
              },
              "documentation": null,
              "id": 94,
              "name": "onlyAuthorised",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 84,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1533:0:1"
              },
              "src": "1509:91:1",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 138,
                "nodeType": "Block",
                "src": "1860:244:1",
                "statements": [
                  {
                    "assignments": [
                      104
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 104,
                        "name": "idx",
                        "nodeType": "VariableDeclaration",
                        "scope": 139,
                        "src": "1870:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 103,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "1870:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 106,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1882:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1870:13:1"
                  },
                  {
                    "body": {
                      "id": 136,
                      "nodeType": "Block",
                      "src": "1941:156:1",
                      "statements": [
                        {
                          "condition": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 118,
                              "name": "authorisedAccounts",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51,
                              "src": "1959:18:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 122,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 119,
                                "name": "accounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 98,
                                "src": "1978:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                                  "typeString": "address[10] memory"
                                }
                              },
                              "id": 121,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 120,
                                "name": "idx",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 104,
                                "src": "1987:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1978:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1959:33:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 132,
                          "nodeType": "IfStatement",
                          "src": "1955:112:1",
                          "trueBody": {
                            "id": 131,
                            "nodeType": "Block",
                            "src": "1994:73:1",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 129,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 123,
                                      "name": "authorisedAccounts",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 51,
                                      "src": "2012:18:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                        "typeString": "mapping(address => bool)"
                                      }
                                    },
                                    "id": 127,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 124,
                                        "name": "accounts",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 98,
                                        "src": "2031:8:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                                          "typeString": "address[10] memory"
                                        }
                                      },
                                      "id": 126,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 125,
                                        "name": "idx",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 104,
                                        "src": "2040:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "2031:13:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "2012:33:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "hexValue": "74727565",
                                    "id": 128,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2048:4:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  },
                                  "src": "2012:40:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 130,
                                "nodeType": "ExpressionStatement",
                                "src": "2012:40:1"
                              }
                            ]
                          }
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "2080:6:1",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 133,
                              "name": "idx",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 104,
                              "src": "2080:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "id": 135,
                          "nodeType": "ExpressionStatement",
                          "src": "2080:6:1"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "accounts",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 98,
                            "src": "1900:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                              "typeString": "address[10] memory"
                            }
                          },
                          "id": 109,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 108,
                            "name": "idx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 104,
                            "src": "1909:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1900:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1925:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 110,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1917:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1917:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1900:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 114,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 104,
                          "src": "1931:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3130",
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1937:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "1931:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1900:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 137,
                    "nodeType": "WhileStatement",
                    "src": "1893:204:1"
                  }
                ]
              },
              "documentation": null,
              "id": 139,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 101,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 100,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 83,
                    "src": "1850:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1850:9:1"
                }
              ],
              "name": "registerAuthorisedAccounts",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 99,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 98,
                    "name": "accounts",
                    "nodeType": "VariableDeclaration",
                    "scope": 139,
                    "src": "1820:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$10_memory_ptr",
                      "typeString": "address[10]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 95,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1820:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 97,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1828:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        },
                        "value": "10"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "1820:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$10_storage_ptr",
                        "typeString": "address[10]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1819:23:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 102,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1860:0:1"
              },
              "scope": 444,
              "src": "1783:321:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 152,
                "nodeType": "Block",
                "src": "2181:51:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 146,
                          "name": "authorisedAccounts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51,
                          "src": "2191:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 148,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 147,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 141,
                          "src": "2210:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2191:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 149,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2221:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "2191:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 151,
                    "nodeType": "ExpressionStatement",
                    "src": "2191:34:1"
                  }
                ]
              },
              "documentation": null,
              "id": 153,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 144,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 143,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 83,
                    "src": "2171:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2171:9:1"
                }
              ],
              "name": "registerAuthorisedAccount",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 142,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 141,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "scope": 153,
                    "src": "2146:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 140,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2146:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2145:18:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 145,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2181:0:1"
              },
              "scope": 444,
              "src": "2110:122:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 165,
                "nodeType": "Block",
                "src": "2293:51:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "delete",
                      "prefix": true,
                      "src": "2303:34:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 160,
                          "name": "authorisedAccounts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51,
                          "src": "2310:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 162,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 161,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 155,
                          "src": "2329:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2310:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 164,
                    "nodeType": "ExpressionStatement",
                    "src": "2303:34:1"
                  }
                ]
              },
              "documentation": null,
              "id": 166,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 158,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 157,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 83,
                    "src": "2283:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2283:9:1"
                }
              ],
              "name": "unauthorise",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 156,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 155,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "scope": 166,
                    "src": "2259:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 154,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2259:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2258:17:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 159,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2293:0:1"
              },
              "scope": 444,
              "src": "2238:106:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 181,
                "nodeType": "Block",
                "src": "2421:34:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 175,
                          "name": "services",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47,
                          "src": "2431:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                            "typeString": "mapping(bytes32 => address)"
                          }
                        },
                        "id": 177,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 176,
                          "name": "n",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 170,
                          "src": "2440:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2431:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 178,
                        "name": "add",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 168,
                        "src": "2445:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2431:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 180,
                    "nodeType": "ExpressionStatement",
                    "src": "2431:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 182,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 173,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 172,
                    "name": "onlyAuthorised",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 94,
                    "src": "2406:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2406:14:1"
                }
              ],
              "name": "registerService",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 171,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 168,
                    "name": "add",
                    "nodeType": "VariableDeclaration",
                    "scope": 182,
                    "src": "2375:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 167,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2375:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 170,
                    "name": "n",
                    "nodeType": "VariableDeclaration",
                    "scope": 182,
                    "src": "2388:9:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 169,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2388:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2374:24:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 174,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2421:0:1"
              },
              "scope": 444,
              "src": "2350:105:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 201,
                "nodeType": "Block",
                "src": "2764:70:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 190,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "2782:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2791:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2782:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 189,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "2774:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2774:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 194,
                    "nodeType": "ExpressionStatement",
                    "src": "2774:19:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 195,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "2803:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 197,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 196,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 184,
                          "src": "2812:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2803:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "2821:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2803:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 200,
                    "nodeType": "ExpressionStatement",
                    "src": "2803:24:1"
                  }
                ]
              },
              "documentation": null,
              "id": 202,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "mintForUser",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 187,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 184,
                    "name": "user",
                    "nodeType": "VariableDeclaration",
                    "scope": 202,
                    "src": "2730:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 183,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2730:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 186,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 202,
                    "src": "2744:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 185,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2744:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2729:27:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 188,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2764:0:1"
              },
              "scope": 444,
              "src": "2709:125:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 213,
                "nodeType": "Block",
                "src": "2907:35:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 209,
                        "name": "services",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "2924:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                          "typeString": "mapping(bytes32 => address)"
                        }
                      },
                      "id": 211,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 210,
                        "name": "n",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 204,
                        "src": "2933:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2924:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 208,
                    "id": 212,
                    "nodeType": "Return",
                    "src": "2917:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 214,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getServiceAddress",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 205,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 204,
                    "name": "n",
                    "nodeType": "VariableDeclaration",
                    "scope": 214,
                    "src": "2867:9:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 203,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2867:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2866:11:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 208,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 207,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 214,
                    "src": "2898:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 206,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2898:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2897:9:1"
              },
              "scope": 444,
              "src": "2840:102:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 262,
                "nodeType": "Block",
                "src": "3001:228:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 227,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 222,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "3019:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 225,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 223,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 516,
                                "src": "3028:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3028:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3019:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 226,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 218,
                            "src": "3043:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3019:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 221,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3011:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3011:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 229,
                    "nodeType": "ExpressionStatement",
                    "src": "3011:39:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 231,
                              "name": "services",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47,
                              "src": "3068:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                                "typeString": "mapping(bytes32 => address)"
                              }
                            },
                            "id": 233,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 232,
                              "name": "n",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 216,
                              "src": "3077:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3068:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 234,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3082:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3068:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 230,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3060:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 236,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3060:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 237,
                    "nodeType": "ExpressionStatement",
                    "src": "3060:24:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 238,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3095:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 241,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 239,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3104:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3104:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3095:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "-=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 242,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 218,
                        "src": "3119:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      },
                      "src": "3095:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 244,
                    "nodeType": "ExpressionStatement",
                    "src": "3095:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 251,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 245,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3135:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 249,
                        "indexExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 246,
                            "name": "services",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47,
                            "src": "3144:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                              "typeString": "mapping(bytes32 => address)"
                            }
                          },
                          "id": 248,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 247,
                            "name": "n",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 216,
                            "src": "3153:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3144:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3135:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 250,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 218,
                        "src": "3160:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint16",
                          "typeString": "uint16"
                        }
                      },
                      "src": "3135:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 252,
                    "nodeType": "ExpressionStatement",
                    "src": "3135:31:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3190:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3190:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 256,
                            "name": "services",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47,
                            "src": "3202:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                              "typeString": "mapping(bytes32 => address)"
                            }
                          },
                          "id": 258,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 257,
                            "name": "n",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 216,
                            "src": "3211:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3202:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 259,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 218,
                          "src": "3215:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        ],
                        "id": 253,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 271,
                        "src": "3181:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3181:41:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 261,
                    "nodeType": "EmitStatement",
                    "src": "3176:46:1"
                  }
                ]
              },
              "documentation": null,
              "id": 263,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "payService",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 219,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 216,
                    "name": "n",
                    "nodeType": "VariableDeclaration",
                    "scope": 263,
                    "src": "2968:9:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 215,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2968:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 218,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 263,
                    "src": "2979:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    },
                    "typeName": {
                      "id": 217,
                      "name": "uint16",
                      "nodeType": "ElementaryTypeName",
                      "src": "2979:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2967:26:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 220,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3001:0:1"
              },
              "scope": 444,
              "src": "2948:281:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 271,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 270,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 265,
                    "indexed": true,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 271,
                    "src": "3250:21:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 264,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3250:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 267,
                    "indexed": true,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 271,
                    "src": "3273:19:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3273:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 269,
                    "indexed": false,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 271,
                    "src": "3294:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 268,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3294:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3249:60:1"
              },
              "src": "3235:75:1"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 279,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 278,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 273,
                    "indexed": true,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 279,
                    "src": "3330:22:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 272,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3330:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 275,
                    "indexed": true,
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 279,
                    "src": "3354:24:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 274,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3354:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 277,
                    "indexed": false,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 279,
                    "src": "3380:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 276,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3380:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3329:66:1"
              },
              "src": "3315:81:1"
            },
            {
              "body": {
                "id": 319,
                "nodeType": "Block",
                "src": "3479:244:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 289,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "3497:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 292,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 290,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 516,
                                "src": "3506:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 291,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3506:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3497:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 293,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 283,
                            "src": "3521:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3497:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 288,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3489:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3489:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 296,
                    "nodeType": "ExpressionStatement",
                    "src": "3489:39:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 302,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 297,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3538:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 300,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 298,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3547:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3547:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3538:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "-=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 301,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "3562:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3538:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 303,
                    "nodeType": "ExpressionStatement",
                    "src": "3538:30:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 304,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3578:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 306,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 305,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 281,
                          "src": "3587:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3578:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 307,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "3595:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3578:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 309,
                    "nodeType": "ExpressionStatement",
                    "src": "3578:23:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 311,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "3625:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 312,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3625:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 313,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 281,
                          "src": "3637:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 314,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 283,
                          "src": "3642:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 310,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 271,
                        "src": "3616:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3616:33:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 316,
                    "nodeType": "EmitStatement",
                    "src": "3611:38:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 317,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3712:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 287,
                    "id": 318,
                    "nodeType": "Return",
                    "src": "3705:11:1"
                  }
                ]
              },
              "documentation": null,
              "id": 320,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 284,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 281,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 320,
                    "src": "3420:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 280,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3420:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 283,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 320,
                    "src": "3433:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 282,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3433:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3419:29:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 287,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 286,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 320,
                    "src": "3465:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 285,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3465:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3464:14:1"
              },
              "scope": 444,
              "src": "3402:321:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 386,
                "nodeType": "Block",
                "src": "3825:407:1",
                "statements": [
                  {
                    "assignments": [
                      332
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 332,
                        "name": "allowance",
                        "nodeType": "VariableDeclaration",
                        "scope": 387,
                        "src": "3835:17:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 331,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3835:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 339,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 333,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "3855:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 335,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 334,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 322,
                          "src": "3863:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3855:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 338,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 336,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 516,
                          "src": "3870:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3870:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3855:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3835:46:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 349,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 345,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 341,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31,
                                "src": "3899:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 343,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 342,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 322,
                                "src": "3908:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3899:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 344,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 326,
                              "src": "3918:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3899:25:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 348,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 346,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 332,
                              "src": "3928:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 347,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 326,
                              "src": "3941:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3928:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3899:48:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 340,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          519,
                          520
                        ],
                        "referencedDeclaration": 519,
                        "src": "3891:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3891:57:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 351,
                    "nodeType": "ExpressionStatement",
                    "src": "3891:57:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 352,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3958:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 354,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 353,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "3967:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3958:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 355,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "3975:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3958:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 357,
                    "nodeType": "ExpressionStatement",
                    "src": "3958:23:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 358,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "3991:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 360,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 359,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 322,
                          "src": "4000:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3991:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "-=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 361,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "4010:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3991:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 363,
                    "nodeType": "ExpressionStatement",
                    "src": "3991:25:1"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 366,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 364,
                        "name": "allowance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 332,
                        "src": "4030:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 365,
                        "name": "MAX_UINT256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27,
                        "src": "4042:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4030:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 377,
                    "nodeType": "IfStatement",
                    "src": "4026:90:1",
                    "trueBody": {
                      "id": 376,
                      "nodeType": "Block",
                      "src": "4055:61:1",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 374,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 367,
                                  "name": "allowed",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 37,
                                  "src": "4069:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 371,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 368,
                                  "name": "_from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 322,
                                  "src": "4077:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "4069:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 372,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 369,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 516,
                                  "src": "4084:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 370,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4084:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "4069:26:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "-=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "id": 373,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 326,
                              "src": "4099:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4069:36:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 375,
                          "nodeType": "ExpressionStatement",
                          "src": "4069:36:1"
                        }
                      ]
                    }
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 379,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 322,
                          "src": "4139:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 380,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "4146:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 381,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "4151:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 378,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 271,
                        "src": "4130:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 382,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4130:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 383,
                    "nodeType": "EmitStatement",
                    "src": "4125:33:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4221:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 330,
                    "id": 385,
                    "nodeType": "Return",
                    "src": "4214:11:1"
                  }
                ]
              },
              "documentation": null,
              "id": 387,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 327,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 322,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3751:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 321,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3751:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 324,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3766:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 323,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3766:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 326,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3779:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 325,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3779:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3750:44:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 330,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 329,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 387,
                    "src": "3811:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 328,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3811:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3810:14:1"
              },
              "scope": 444,
              "src": "3729:503:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 398,
                "nodeType": "Block",
                "src": "4311:40:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 394,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31,
                        "src": "4328:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 396,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 395,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 389,
                        "src": "4337:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4328:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 393,
                    "id": 397,
                    "nodeType": "Return",
                    "src": "4321:23:1"
                  }
                ]
              },
              "documentation": null,
              "id": 399,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 390,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 389,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "4257:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 388,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4257:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4256:16:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 393,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 392,
                    "name": "balance",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "4294:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 391,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4294:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4293:17:1"
              },
              "scope": 444,
              "src": "4238:113:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 426,
                "nodeType": "Block",
                "src": "4438:175:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 415,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 408,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "4448:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 412,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 409,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 516,
                              "src": "4456:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4456:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4448:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 413,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 411,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 401,
                          "src": "4468:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4448:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 414,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "4480:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4448:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 416,
                    "nodeType": "ExpressionStatement",
                    "src": "4448:38:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 418,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "4510:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4510:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 420,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 401,
                          "src": "4522:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 403,
                          "src": "4532:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 417,
                        "name": "Approval",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 279,
                        "src": "4501:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4501:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 423,
                    "nodeType": "EmitStatement",
                    "src": "4496:43:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4602:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 407,
                    "id": 425,
                    "nodeType": "Return",
                    "src": "4595:11:1"
                  }
                ]
              },
              "documentation": null,
              "id": 427,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 404,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 401,
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "4374:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 400,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4374:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 403,
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "4392:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 402,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4392:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4373:34:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 407,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 406,
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "4424:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 405,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4424:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4423:14:1"
              },
              "scope": 444,
              "src": "4357:256:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 442,
                "nodeType": "Block",
                "src": "4712:49:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 436,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "4729:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 438,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 437,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 429,
                          "src": "4737:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4729:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 440,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 439,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 431,
                        "src": "4745:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4729:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 435,
                    "id": 441,
                    "nodeType": "Return",
                    "src": "4722:32:1"
                  }
                ]
              },
              "documentation": null,
              "id": 443,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 432,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 429,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "4638:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 428,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4638:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 431,
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "4654:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 430,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4654:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4637:34:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 435,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 434,
                    "name": "remaining",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "4693:17:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 433,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4693:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4692:19:1"
              },
              "scope": 444,
              "src": "4619:142:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 445,
          "src": "317:4446:1"
        }
      ],
      "src": "0:4763:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0x81f20a168009c0592094e1c78773e58a5a552b67",
        "transactionHash": "0x5eb07e257b1068cfdf6097ac541a6ac65d4e5e421da1eb35fbb2842b499ef032"
      }
    },
    "schemaVersion": "2.0.1",
    "updatedAt": "2018-10-23T05:02:10.091Z"
  }

angular.module('ethExplorer', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
            }).
            when('/block/:blockId', {
                templateUrl: 'views/blockInfos.html',
                controller: 'blockInfosCtrl'
            }).
            when('/transaction/:transactionId', {
                templateUrl: 'views/transactionInfos.html',
                controller: 'transactionInfosCtrl'
            }).
            when('/address/:addressId', {
                templateUrl: 'views/addressInfo.html',
                controller: 'addressInfoCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }])
    .run(function($rootScope) {
        var web3 = new Web3();
        var eth_node_url = 'http://ethwl2ous-dns-reg1.southeastasia.cloudapp.azure.com:8540'; // TODO: remote URL
	web3.setProvider(new web3.providers.HttpProvider(eth_node_url));
        $rootScope.web3 = web3;

        const contractAddress = "0x1f8e57d6262d62a5e1fc14f16a44b13e5c3e6e07";

        let url = "http://ethwl2ous-dns-reg1.southeastasia.cloudapp.azure.com:8540";
        let customHttpProvider = new ethers.providers.JsonRpcProvider(url);

        $rootScope.contract = new ethers.Contract(contractAddress, ABI.abi, customHttpProvider);

        function sleepFor( sleepDuration ){
            var now = new Date().getTime();
            while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
        }
        var connected = false;
        if(!web3.isConnected()) {
            $('#connectwarning').modal({keyboard:false,backdrop:'static'}) 
            $('#connectwarning').modal('show') 
        }
    });
