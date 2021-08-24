var handshake;
function startApp() {
    // get access to the smart contract
    var handshakeAddress = "0xf7cfF46424c90723a90a3B748642dD7588D86EC0";
    handshake = new web3js.eth.Contract(handshakeABI, handshakeAddress);

    // listen to events emitted from smart contract
    handshake.events.AgreementCreated()
    .on("data", function(event) {
        let agreements = event.returnValues;
        console.log("A new agreement occurred!\n", 
                    "Agreement ID: ", agreements.id, "\n", 
                    "Employer Address: ", agreements.employer, "\n",
                    "Contractor Address: ", agreements.contractor, "\n",
                    "Agreed payment: ", agreements.payment);
    }).on("error", console.error);
}

function callInit() {
    // call a function from the smart contract
    handshake.methods.init("0xf7cfF46424c90723a90a3B748642dD7588D86EC0", 11).send({from:"0x04f4ccdA65AeFE0C509430Dd258DF6638cc01117"});
    console.log("ran init() from the smart contract");
}

// connect to metamask
window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (window.ethereum) {
        console.log("metamask is installed");
    }
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        // Handle the case where the user doesn't have Metamask installed
        // Probably show them a message prompting them to install Metamask
        console.log("install metamask.");
    }

    // start app & access web3 freely:
    startApp();
})