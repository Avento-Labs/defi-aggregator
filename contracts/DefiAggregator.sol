// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SwappingAggregator {
    // Event to log the execution of calls
    event ExecutedCall(address indexed target, bytes data);

    // Struct to define call data
    struct Call {
        address target; // The target address of the call
        bytes data; // The call data
    }

    /**
     * @dev Executes a batch of calls.
     * @param calls An array of 'Call' structs containing target addresses and call data.
     * Note: In a real-world scenario, further validation is required to ensure security.
     * This function can be potentially risky as it can execute any arbitrary call data.
     */
    function execute(Call[] memory calls) public {
        for (uint256 i = 0; i < calls.length; i++) {
            // Ensuring that the target address is not a zero address
            require(calls[i].target != address(0), "Invalid target address");

            (bool success, ) = calls[i].target.call(calls[i].data);
            require(success, "Call execution failed");

            emit ExecutedCall(calls[i].target, calls[i].data);
        }
    }
}
