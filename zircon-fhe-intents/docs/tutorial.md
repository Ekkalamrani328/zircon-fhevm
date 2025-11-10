# ZIRCON Demo — Quick Tutorial

This demo shows how **ZIRCON** performs **encrypted intent submission** and **private matching** using client-side encryption and local-only decrypted history.

## 🌐 What This Demo Represents

| Component | Behavior | Privacy |
|---------|----------|---------|
| Submit Intent | User inputs price, amount, side | Values are **encrypted before stored** |
| Orderbook | Shows only ciphertext | **No plaintext is revealed** |
| My Orders | Shows decrypted values locally | **Visible only to the owner** |

The chain (or public observers) **never learn** price, amount, or side.

---

## 🚀 Run the Demo (Local)

```bash
cd zircon-fhe-intents/packages/zircon-frontend
python3 -m http.server 8080
```

Then open:

```
http://localhost:8080
```

---

## 📝 Workflow

### 1) Submit Encrypted Intent
You enter:
- Side (Buy/Sell)
- Price
- Amount

The client locally encrypts values and generates:
```
{ ctSide, ctPrice, ctAmount, orderId, timestamp }
```

This is stored in an encrypted orderbook.

### 2) Minimal Public Output
The public UI only displays:
```
Status: submitted / matched
```
No numbers, no side, no direction.

### 3) Owner Private History
Your browser keeps a local decrypted list:

| Order ID | Side | Price | Amount | txHash |
|---------|------|-------|--------|-------|

This history **never touches the blockchain**.

---

## 🧩 Key Idea

ZIRCON demonstrates **private-by-default trading** using **FHE concepts**:
- **Encrypted orderflow**
- **Private price/size matching**
- **Local decryption for user-only visibility**
- **Optional threshold reveal for settlement**

---

## ✅ End Result

Traders keep **full privacy**, while the system still allows:
- verifiable execution
- optional settlement proofs
- minimal leakage

Encrypted intent execution — **without exposing strategy**.

---

MIT © 2025 Iremsena — ZIRCON
