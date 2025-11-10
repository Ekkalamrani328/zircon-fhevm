⚙️ **Quick Tutorial** (1-Minute Overview)

This tutorial demonstrates the minimal workflow of ZIRCON — the Dark Liquidity Intent Layer powered by Fully Homomorphic Encryption (FHE) on fhEVM.

1. **Submit Phase**

    The client encrypts trade parameters (price, amount, side) into ciphertexts → ctPrice, ctAmount, ctSide, plus a random nonce.

    # Each submission stores an encrypted local record:

| json                                     |
| **orderId, price, amount, side, txHash** |

This record remains visible only to the owner through local decryption.
--------------------------------------------------------------------------
2. **On-Chain Execution**

    # The smart contract method submit() saves the encrypted payload on-chain.
    # The matching process (tryMatch()) operates with secure functions:
     - fhe_compare() → private comparison
     - fhe_select() → conditional selection under encryption
    # The contract emits lightweight public events:
     - OrderSubmitted / OrderMatched    
    (no plaintext values are ever revealed).
---------------------------------------------------------------------------
3. **Owner-Side Decryption**
    - The wallet or client reads the locally stored ciphertexts.
    - Decryption is performed entirely on the user side, enabling a private view of full order  history and states.
---------------------------------------------------------------------------
4. **(Optional) Reveal Protocol**

    # A T-of-N threshold committee can jointly reveal minimal artifacts (e.g., matched amount) only if required for:
    - Settlement
    - Arbitration / dispute resolution
    # The protocol ensures zero unnecessary data exposure.
----------------------------------------------------------------------------
💡 Summary

ZIRCON demonstrates how FHE enables encrypted order matching, maintaining full privacy for traders while still allowing transparent settlement when required
