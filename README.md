# Cryptobet App

Cryptobet is a decentralized betting application. The project is divided into two main parts: the backend, which uses Hardhat for smart contract development and deployment, and the frontend, which is built using Next.js.

## Project Structure

- **Backend**: This folder contains the smart contracts and related scripts for deployment. The contracts are written in Solidity and are deployed on the Sepolia test network using Hardhat.

  - To compile the contracts, use:
    ```shell
    npx hardhat compile
    ```

  - To deploy the contracts locally, use:
    ```shell
    npx hardhat ignition deploy ./ignition/modules/your_contract.js
    ```

  - To deploy the contracts on the Sepolia network, use:
    ```shell
    npx hardhat ignition deploy ./ignition/modules/your_contract.js --network optimismSepolia
    ```

- **Frontend**: This folder contains the web application built with Next.js. The frontend interacts with the smart contracts and provides a user interface for placing bets and viewing outcomes.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You will also need Hardhat and Next.js to run the backend and frontend, respectively.

### Installation

1. **Clone the repository**:
    ```shell
    git clone https://github.com/yourusername/cryptobet.git
    ```

2. **Install dependencies for the backend**:
    ```shell
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```shell
    cd ../frontend
    npm install

Open your browser and navigate to `http://localhost:3000` to view the application.

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
