// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract manageFundManager is Ownable{

    constructor(address initialOwner)
    Ownable(initialOwner) {}

    // Precompile address for Hedera address derivation
    address constant HEDERA_PRECOMPILE = address(0x167);

    // Properties of a fund managers
    struct FundManager {
        address evmAddress;
        string hederaAccountID;
        string name;
        string jurisdiction;
        bool passedCompliance;
    }

    FundManager[] public fundManagers;
    mapping(address => uint256) public managerIndex; // Tracks manager positions

    event newFundManagerCreated(address indexed evmAddress, string hederaAccountID, string managerName, string jurisdiction, bool passedCompliance );
    event complianceStatusChanged( address indexed evmAddress, bool isCompliant);

    function createFundManager(string memory hederaAddress, string memory managerName, string memory jurisdiction)external {
        // Input validation
        require(bytes(hederaAddress).length > 0, "Hedera address required");
        require(bytes(managerName).length > 0, "Manager name required");
        require(bytes(jurisdiction).length > 0, "Jurisdiction required");

        string memory hederaAccount = getHederaAccount(msg.sender);

        fundManagers.push(FundManager({evmAddress:msg.sender, hederaAccountID:hederaAccount, name:managerName, jurisdiction:jurisdiction, passedCompliance: false}));

         managerIndex[msg.sender] = fundManagers.length - 1;

        emit newFundManagerCreated(msg.sender, hederaAccount, managerName, jurisdiction, false );
    }

    function markFundManagerAsCompliant(address managerAddress) onlyOwner external {
        uint256 index = managerIndex[managerAddress];
        require(index < fundManagers.length, "Invalid manager");
        require(!fundManagers[index].passedCompliance, "Already compliant");
        
        fundManagers[index].passedCompliance = true;
        
        emit complianceStatusChanged(managerAddress,true);
    }

    function markFundManagerAsNonCompliant(address managerAddress) onlyOwner external {
        uint256 index = managerIndex[managerAddress];
        require(index < fundManagers.length, "Invalid manager");
        require(fundManagers[index].passedCompliance, "Already non-compliant");
        
        fundManagers[index].passedCompliance = false;
        emit complianceStatusChanged(managerAddress,false);
    }



    function isValidHederaAccount(string memory account) internal pure returns (bool) {
            bytes memory b = bytes(account);
            if(b.length < 5) return false;
            
            // Check for X.Y.Z format
            uint dotCount;
            for(uint i; i < b.length; i++) {
                if(b[i] == '.') dotCount++;
                else if(b[i] < '0' || b[i] > '9') return false;
            }
            return dotCount == 2;
     }

    // Derives Hedera account from EVM address
    function getHederaAccount(address evmAddress) public view returns (string memory) {
        (bool success, bytes memory result) = HEDERA_PRECOMPILE.staticcall(
            abi.encode(evmAddress)
        );
        require(success, "Hedera address derivation failed");
        
        // Returns in 0.0.1234 format
        return string(result);
    }

}

