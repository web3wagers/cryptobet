# Backend for Cryptobet app

This project deploys contracts using hardat, to compile the contracts run

# Local Configuration
To run and deploy the contract in OP Sepolia, follow the next steps:

1. Move to Backend Folder
```shell
cd backend
```
2. Install Hardhat enviroment
```shell
npm install --save-dev hardhat
```
3. Compile the contracts
```shell
npx hardhat compile
```
4. Deploy and verify contract in OP Sepolia
```shell
npx hardhat ignition deploy ignition/modules/Bets.js --network optimismSepolia --verify
```

# Important Configurations 
- To deploy in OP Sepolia you need to create a .env file with the following variables
1. ALCHEMY_API_KEY  => Create an account to get the api key here https://www.alchemy.com/ 
2. PRIVATE_KEY      => Wallet private key 
3. ETHERSCAN_API_KEY=> Create an account here https://optimistic.etherscan.io/register

# Contributors
We appreciate the contributions of the following individuals to this project:
- [EmmanuelAR](https://github.com/EmmanuelAR)
- [adrianvrj](https://github.com/adrianvrj)
- [jakefernandez102](https://github.com/jakefernandez102)

## Contribution Guidelines

1. **Issue Comment**: Leave a comment on the issue introducing yourself briefly and describing how you plan to address the issue.
2. **Time Estimate**: Provide an estimate of how long it will take you to resolve the issue.
3. **Contact Information**: Include your Telegram username in case we need to contact you.
4. **Questions**: For any questions, feel free to join our Telegram channel [here](https://t.me/+sT9NSw-FBAoxNWYx).
