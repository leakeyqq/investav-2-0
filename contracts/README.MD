
# 🌊 Hui Finance Protocol

## Contract Address on Hedera 0.0.5806756

<p align="center">
  <img src="https://huifinance.vercel.app/logo-no-background.png" width="300" alt="Hedera Logo">
  <br>
  <em>Next-generation compliant money markets on Hedera</em>
</p>

## 📌 Overview
**Hui Finance** revolutionizes institutional DeFi by providing:
- ✅ Automated compliance gatekeeping
- 🔒 Non-custodial fund management
- ⚡ Hedera-native performance
- 📊 Real-time audit trails

## 🏦 Live Money Market Funds

| Fund | Account ID | Target Yield | Min. Investment | Liquidity |
|------|------------|--------------|-----------------|-----------|
| <img src="https://placehold.co/20x20/0047AB/FFFFFF?text=CDG" width="20"/> **CDG Capital MMF** | `0.0.5806334` | 3.85% APY | $1 | Daily |
| <img src="https://placehold.co/20x20/228B22/FFFFFF?text=ZI" width="20"/> **Zidii Cash Fund** | `0.0.5806342` | 4.20% APY | $50 | Daily |
| <img src="https://placehold.co/20x20/CC0000/FFFFFF?text=JP" width="20"/> **JPMorgan Prime** | `0.0.5806362` | 5.15% APY | $10 | Instant |
| <img src="https://placehold.co/20x20/FFD700/000000?text=MQ" width="20"/> **Macquarie CMT** | `0.0.5806379` | 4.75% APY | $10 | T+1 |

## 🛠 Tech Stack
```mermaid
flowchart LR
    A[Fund Manager] --> B[Hui Compliance Engine]
    B --> C{KYC/AML Pass?}
    C -->|Approved| D[Mint HTS Tokens]
    C -->|Rejected| E[Add to fraud list]
    D --> F[Investor Dashboard]
