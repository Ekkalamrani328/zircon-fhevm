# 🏗️ fhEVM Order Matching Architecture

## Overview

This architecture describes a privacy-preserving order matching system built on Fully Homomorphic Encryption (FHE) within an fhEVM environment.  
All sensitive data (e.g., side, price, amount) remain encrypted on-chain, ensuring confidentiality while enabling functional computations over ciphertexts.

---

## 🔧 Core Components

| Component  | Description  |
|------------|--------------|
| **Client (Wallet / dApp)** | Handles encryption and decryption locally. Encrypts user intent (side, price, amount) before sending to the contract. Maintains local order history for reference. |
| **fhEVM Contract** | Stores ciphertexts only — never plaintext. Executes FHE-based matching logic to pair compatible orders without exposing private data. |
| **Threshold Committee (optional)** | A decentralized group that can perform selective minimal reveal using threshold decryption when necessary (e.g., compliance or dispute resolution). Prevents single-party data exposure. |

---

## 📦 Data Model

All orders are stored and processed in ciphertext form to maintain privacy and prevent any leakage of sensitive trading data.

```solidity
struct CipherIntent {
  bytes ctSide;     // Encrypted side (buy/sell)
  bytes ctPrice;    // Encrypted price
  bytes ctAmount;   // Encrypted amount
  address owner;    // Order owner
  bytes32 nonce;    // Unique nonce for anti-replay protection
}
```

> 💡 **Note:**  
> The contract never holds or computes over plaintext values.  
> All operations, including matching, are fully homomorphic computations.

---

## 📡 Events

Minimal events are emitted to maintain transparency while preserving privacy.

```solidity
event OrderSubmitted    (bytes32 indexed orderId);
event OrderMatched      (bytes32 indexed a, bytes32 indexed b);
event RevealRequested   (bytes32 indexed ctx, address requester);
event Revealed          (bytes32 indexed ctx, bytes minimalOut);
```
------------------------------------------------------------------------------------
| Event               | Purpose                                                    |
|---------------------|------------------------------------------------------------|
| **OrderSubmitted**  | Triggered when a new ciphertext order is submitted.        |
| **OrderMatched**    | Triggered when two encrypted orders match using FHE logic. |
| **RevealRequested** | Emitted when a minimal reveal request is initiated by a user or auditor.|
| **Revealed**        | Emitted once the Threshold Committee releases minimal decrypted output.|

---

## 🧠 System Summary

--------------------------------------------------------------------------------------------
| Feature                   | Description                                                  |
|---------------------------|--------------------------------------------------------------|
| **Privacy Layer**         | End-to-end encryption with no plaintext exposure.            |
| **On-chain Logic**        | FHE-based computation directly within fhEVM smart contracts. |
| **Fairness & Trust**      | Zero-knowledge-like transparency — verifiable events without revealing user data.|
| **Selective Reveal**      | Optional partial decryption via threshold cryptography.      |
| **Use Case**              | Encrypted order books, private auctions, or confidential DeFi operations.|

![architecture]
|  Client (Wallet)  |
|-------------------|
| - Encrypt Data    |
| - Local Storage   |
| - Decrypt Locally |
+---------+---------+
          |
          v
+-------------------+
|  fhEVM Contract   |
|-------------------|
| - Cipher Storage  |
| - FHE Matching    |
| - Emit Events     |
+---------+---------+
          |
          v
+-------------------+
| Threshold Committee|
|-------------------|
| - Optional Reveal  |
| - Minimal Exposure |
+-------------------+
## 🧩 Summary

The fhEVM Order Matching System represents a next-generation privacy architecture that enables:
- Encrypted trading logic directly on-chain,
- Zero plaintext exposure, and
- Mathematically secure matching through Fully Homomorphic Encryption.
