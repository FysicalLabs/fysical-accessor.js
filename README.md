
# Fysical-Accessor.js

This is the JavaScript API for reading and writing to the Fysical Smart Contract deployed on the Ethereum Blockchain.

## Installation

```bash
npm install fysical-accessor
```

## Usage

```javascript
FysicalAccessor = require("fysical-accessor");

var fysicalAccessor = new FysicalAccessor(
    "https://mainnet.infura.io:8545", // ethereum json rpc endpoint
    "0x587e276dc7f2c97d986e8adf9b82d3f14d6cd8d2", // ethereum contract address
    "0x06dad0077f71ff6d7280a3d42b202a861778855d", // ethereum user public address
    "26e9f5ca5edeab1b0ef99fd4736dddf842d44808b3da95e3ea54a473961e062e", // ethereum user private key
    10, // gas price in gwei
    true // enable logging
);
```