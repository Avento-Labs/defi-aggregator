// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SwapAggregator {
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
     * This function can be potentially risky as it can execute any arbitrary call data.
     */
    function execute(Call[] memory calls) public payable {
        for (uint256 i = 0; i < calls.length; i++) {
            // Ensuring that the target address is not a zero address
            require(calls[i].target != address(0), "Invalid target address");

            (bool success, bytes memory returnData) = calls[i].target.call{
                value: msg.value / calls.length
            }(calls[i].data);
            if (!success) {
                if (returnData.length < 68) revert("Call failed");
                assembly {
                    // Skip the first 0x20 bytes (32 bytes), then load the next 32 bytes
                    returnData := add(returnData, 0x20)
                }
                revert(abi.decode(returnData, (string))); // Decode the revert reason and revert with it
            }
            emit ExecutedCall(calls[i].target, calls[i].data);
        }
    }

    function recieve() external payable {}
}
