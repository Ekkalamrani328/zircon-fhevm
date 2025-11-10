<p align="center">
  <img src="zircon-fhe-intents/assets/banner.svg" width="100%" alt="ZIRCON Banner">
</p>

<div align="center">

### **ZIRCON — Dark Liquidity Intent Layer (fhEVM)**  
**Private Orderflow · Encrypted Matching · Optional Threshold Reveal**

[![📚 Documentation](https://img.shields.io/badge/📚_Documentation-003366?style=for-the-badge)](https://ekkalamrani328.github.io/zircon-fhevm/)
[![🚀 Live Demo](https://img.shields.io/badge/🚀_Live_Demo-10b981?style=for-the-badge)](https://ekkalamrani328.github.io/zircon-fhevm/demo/)
[![👤 Developer Profile](https://img.shields.io/badge/👤_Developer_Profile-000?style=for-the-badge)](https://github.com/Ekkalamrani328)

</div>

---

## 🧭 Overview

**ZIRCON** is a **privacy-preserving intent layer** for decentralized trading.  
It ensures that **price, amount, and trade direction remain encrypted** during submission *and* matching.  
Execution is powered by **Fully Homomorphic Encryption (FHE)** on **Zama’s fhEVM**, allowing smart contracts to compute **directly on ciphertext**.

> **No plaintext orderflow ever touches the chain.**  
> Matching is unobservable and settlement can be revealed only when necessary.

---

## 🔐 Why FHE + Zama fhEVM?

**Fully Homomorphic Encryption (FHE)** allows computations to run **while data stays encrypted**.  
Zama’s **fhEVM** extends Ethereum so that encrypted integers can be compared, matched, and routed **inside smart contracts**, without decrypting.

| Benefit | Description |
|--------|-------------|
| **Encrypted orderflow** | Traders never leak intent to mempools, validators, or MEV bots. |
| **Private matching** | Matching logic uses `fhe_compare` / `fhe_select` — no visibility to observers. |
| **Minimal reveal** | Only settlement outputs must be revealed — and even that can be threshold-gated. |

This makes ZIRCON suitable for:  
- Dark liquidity venues  
- OTC intent auctions  
- MEV-resistant marketplaces  
- Private RFQ routing  

---

## 🧱 System Architecture

<p align="center">
  <img src="zircon-fhe-intents/assets/diagram-zircon.svg" width="90%">
</p>

| Component | Responsibility | Visibility |
|---------|----------------|-------------|
| **Client / Wallet** | Encrypts intents, stores decrypted history locally. | Private to the user. |
| **fhEVM Smart Contract** | Performs encrypted comparisons and matching. | Public chain, but ciphertext only. |
| **Threshold Committee (optional)** | Provides controlled, auditable reveal for settlement or dispute resolution. | Distributed trust. |

---

## 🗺️ Project Roadmap (Rencana Pengembangan)

<p align="center">
  <img src="zircon-fhe-intents/assets/zircon-roadmap.svg" width="90%" />
</p>

**Current Stage:** **Phase I — Foundations** *(✔ Delivered)*  
- Public documentation (MkDocs + GitHub Pages)  
- Private-by-default demo UI  
- Local encrypted order history  
- Minimal encrypted intent commitment model  

**Future phases are exploratory.**  
Roadmap defines direction — not obligation.

---

## 🚀 Quick Start (Local Development)

```bash
npm install
npm run build
npm run dev
