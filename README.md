<p align="center">
  <img src="zircon-fhe-intents/assets/banner.svg" width="100%" alt="ZIRCON Banner">
</p>

<div align="center">

**ZIRCON — Dark Liquidity Intent Layer (fhEVM)**  
Encrypted Orderflow • Unobservable Matching • Threshold Reveal

<br>

npm install
npm run build
npm run dev

<div align="center">

[![📚 Documentation](https://img.shields.io/badge/📚_Documentation-003366?style=for-the-badge)](https://ekkalamrani328.github.io/zircon-fhevm/)
[![🚀 Live Demo](https://img.shields.io/badge/🚀_Live_Demo-1AAB8A?style=for-the-badge)](https://ekkalamrani328.github.io/zircon-fhevm/demo/)
[![👤 Profile](https://img.shields.io/badge/👤_Developer_Profile-000?style=for-the-badge)](https://github.com/Ekkalamrani328)

</div>


</div>

---

ZIRCON provides a confidential execution environment for intent-based trading using **Fully Homomorphic Encryption (FHE)** deployed on the **Zama fhEVM** runtime.

The system ensures that **all orderflow and matching logic remain encrypted**, enabling secure and private execution of intent-based interactions.

---

System Architecture

<p align="center">
  <img src="zircon-fhe-intents/assets/diagram-zircon.svg" width="90%">
</p>

### Components

| Component | Responsibility | Trust Boundary |
|---------|----------------|----------------|
| **Client / Wallet** | Encrypts intents using public FHE key. Maintains local cleartext state. | User-side only. Private. |
| **fhEVM Smart Contract** | Executes matching logic *directly* over ciphertext. Emits encrypted state transitions. | On-chain. Zero plaintext disclosure. |
| **Threshold Committee (Optional)** | Participates only in controlled reveal scenarios (settlement / view keys / regulatory modes). | Distributed & auditable. |

---

## 3. Security Properties

| Property | Guarantee |
|---------|-----------|
| **Orderflow Privacy** | No participant, relayer, or validator can infer trade intent. |
| **Unobservable Matching** | Matching logic executes over encrypted values (FHE). |
| **Minimal Reveal** | Settlement requires only cryptographically bounded reveal. |
| **EVM Compatibility** | Contracts deployable on any fhEVM network instance. |

## Quick Start

[![🚀 Live Demo]

## 📜 License
MIT © 2025 — Iremsena Development Initiative

</div>
