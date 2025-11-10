# Contributing to ZIRCON

## Settings
- Node 20+, pnpm/npm
- Copy `.env.example` → `.env` and set `FHEVM_RPC`, `FHEVM_CHAIN_ID`, `PRIVATE_KEY`

## Commands
- `npm run build` — compiles the contract
- `npm run deploy:fhevm` — deploys, writes `frontend/contract.json`
- `npm run demo` — displays the UI at http://localhost:3000

## Pull Request
- Tests pass locally
- Run linter (solhint/eslint) before PR
- Add/Update docs when behavior changes


NOTE: KEEP YOUR PRIVATE KEY ADDRESS SAFE
