let contract;

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('MetaMask is connected');

            const contractABI = [
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_convictName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_provision",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_state",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_place",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_crimeCommitted",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_convictionDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "_punishment",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_facts",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_ipfsHash",
                            "type": "string"
                        }
                    ],
                    "name": "addOffender",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "offenderAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "convictName",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "provision",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "state",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "place",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "crimeCommitted",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "convictionDate",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "punishment",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "facts",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "ipfsHash",
                            "type": "string"
                        }
                    ],
                    "name": "OffenderAdded",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_index",
                            "type": "uint256"
                        }
                    ],
                    "name": "getOffender",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
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
                            "name": "_index",
                            "type": "uint256"
                        }
                    ],
                    "name": "getOffenderAddress",
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
                    "name": "getOffendersCount",
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
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "offenders",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "convictName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "provision",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "state",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "place",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "crimeCommitted",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "convictionDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "punishment",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "facts",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "ipfsHash",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "offenderAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ];

            const contractAddress = '0xd771f0a159f3186A119F3C0CF7b25256c5c622f4';  
            
            contract = new web3.eth.Contract(contractABI, contractAddress);
            console.log('Contract:', contract);
            
        } catch (error) {
            console.error('User denied account access:', error);
        }
    } else {
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        console.log('No web3 instance injected, using Local web3.');

        const contractABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_convictName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_provision",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_state",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_place",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_crimeCommitted",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_convictionDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_punishment",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_facts",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_ipfsHash",
                        "type": "string"
                    }
                ],
                "name": "addOffender",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "offenderAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "convictName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "provision",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "state",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "place",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "crimeCommitted",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "convictionDate",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "punishment",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "facts",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "ipfsHash",
                        "type": "string"
                    }
                ],
                "name": "OffenderAdded",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getOffender",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
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
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getOffenderAddress",
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
                "name": "getOffendersCount",
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
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "offenders",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "convictName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "provision",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "state",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "place",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "crimeCommitted",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "convictionDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "punishment",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "facts",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "ipfsHash",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "offenderAddress",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];

        const contractAddress = '0xd771f0a159f3186A119F3C0CF7b25256c5c622f4';
        
        contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log('Contract:', contract);
    }
});

async function addOffender() {
    const convictName = document.getElementById("convictNameInput").value;
    const provision = document.getElementById("provisionInput").value;
    const state = document.getElementById("stateInput").value;
    const place = document.getElementById("placeInput").value;
    const crimeCommitted = document.getElementById("crimeCommittedInput").value;
    const convictionDateInput = document.getElementById("convictionDateInput").value;
    const convictionDate = Math.floor(new Date(convictionDateInput).getTime() / 1000);
    const punishment = document.getElementById("punishmentInput").value;
    const facts = document.getElementById("factsInput").value;
    const ipfsHash = document.getElementById("ipfsHashInput").value;

    try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        if (!account) {
            console.error("No accounts found. Please ensure MetaMask is connected.");
            alert("No accounts found. Please ensure MetaMask is connected.");
            return;
        }

        const gas = await contract.methods.addOffender(convictName, provision, state, place, crimeCommitted, convictionDate, punishment, facts, ipfsHash).estimateGas({ from: account });

        contract.methods.addOffender(convictName, provision, state, place, crimeCommitted, convictionDate, punishment, facts, ipfsHash).send({ from: account, gas })
            .on('receipt', function(receipt) {
                console.log(receipt);
                alert("Offender added successfully!");
            })
            .on('error', function(error) {
                console.error("Error adding offender: ", error);
                alert("Error adding offender. Please try again.");
            });
    } catch (error) {
        console.error("An error occurred: ", error);
        alert("An error occurred. Please check the console for details.");
    }
}

async function retrieveData() {
    try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        if (!account) {
            console.error("No accounts found. Please ensure MetaMask is connected.");
            return;
        }

        const offendersCount = await contract.methods.getOffendersCount().call();

        const offenderList = document.getElementById("offenderList");
        offenderList.innerHTML = ''; // Clear previous list content

        for (let i = 0; i < offendersCount; i++) {
            const offenderData = await contract.methods.getOffender(i).call();

            const convictName = offenderData[0];
            const provision = offenderData[1];
            const state = offenderData[2];
            const place = offenderData[3];
            const crimeCommitted = offenderData[4];
            const convictionDate = new Date(Number(offenderData[5]) * 1000).toLocaleDateString();
            const punishment = offenderData[6];
            const facts = offenderData[7];
            const ipfsHash = offenderData[8];

            console.log(`Offender: ${convictName}`);
            console.log(`  Provision: ${provision}`);
            console.log(`  State: ${state}`);
            console.log(`  Place: ${place}`);
            console.log(`  Crime Committed: ${crimeCommitted}`);
            console.log(`  Conviction Date: ${convictionDate}`);
            console.log(`  Punishment: ${punishment}`);
            console.log(`  Facts: ${facts}`);
            console.log(`  IPFS Hash: ${ipfsHash}`);
            
            // Function to add details as list items
            const addDetailToList = (label, value) => {
                const detailItem = document.createElement("li");
                detailItem.textContent = `${label}: ${value}`;
                offenderList.appendChild(detailItem);
            };

            // Add each detail to the offender list
            addDetailToList("Convict Name", convictName);
            addDetailToList("Provision", provision);
            addDetailToList("State", state);
            addDetailToList("Place", place);
            addDetailToList("Crime Committed", crimeCommitted);
            addDetailToList("Conviction Date", convictionDate);
            addDetailToList("Punishment", punishment);
            addDetailToList("Facts", facts);
            addDetailToList("IPFS Hash", ipfsHash);

            // Add a horizontal rule to separate each convict's data
            const separator = document.createElement("hr");
            offenderList.appendChild(separator);
        }
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

