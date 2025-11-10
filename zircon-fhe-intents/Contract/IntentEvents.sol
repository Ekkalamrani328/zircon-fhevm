// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title ZIRCON — Minimal Cipher Intent Event (fhEVM-ready)
contract IntentEvents {
    /// @notice Minimal public output (no owner, no plaintext)
    event CipherIntent(bytes32 commitment, bytes ciphertext);

    /// @dev helper to emit a sample event (for tests/scripts)
    function submit(bytes32 commitment, bytes calldata ciphertext) external {
        emit CipherIntent(commitment, ciphertext);
    }
}
