# Backend for Cryptobet app

This project deploys contracts using hardat, to compile the contracts run

```shell
npx hardhat compile
```
To deploy the contracts locally run 

```shell
npx hardhat ignition deploy ./ignition/modules/your_contract.js
```

To deploy contracts on sepolia:
```shell
npx hardhat ignition deploy ./ignition/modules/your_contract.js --network optimismSepolia
```