// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract handshake {
    
    event AgreementCreated(uint id, address employer, address contractor, uint payment);

    struct Entity {
        bool vote; 
        address entityAddr;
    }
    
    struct Agreement {
        uint id;
        Entity employer;
        Entity contractor;
        uint bounty;
    }
    
    // map containing all the current active agreements 
    mapping (uint => Agreement) private agreements;
    
    Entity employer;
    Entity contractor;
    
    function init(address _contractor, uint _payment) public {
        
        // create instances of an employer and contractor
        employer = Entity(false, msg.sender);
        contractor = Entity(false, _contractor);
        
        // generate a random value to represent ID 
        uint id = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
        
        //TODO stake the payment amount from contractor's wallet and emit that information to frontend 
        agreements[id] = Agreement(id, employer, contractor, _payment);
        emit AgreementCreated(id, employer.entityAddr, contractor.entityAddr, _payment);
    }
    
    function setEmployerVote(uint id, bool _vote) public {
        require(agreements[id].id > 0);
        agreements[id].employer.vote = _vote;
    }
    
    function setContractorVote(uint id, bool _vote) public {
        require(agreements[id].id > 0);
        agreements[id].contractor.vote = _vote;
    }
    
    function getUnanimousVote(uint id) public view returns (bool) {
        require(agreements[id].id > 0);
        return agreements[id].employer.vote && agreements[id].contractor.vote;
    }
    
}