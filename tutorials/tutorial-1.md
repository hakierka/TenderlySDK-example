# Tutorial 1: Integrating Tenderly Simulations into Your Dapp

In this tutorial, we will guide you through the process of integrating Tenderly's simulations into your decentralized application (dapp).

## Prerequisites
- Node.js installed on your machine
- Tenderly SDK installed in your project

## Step 1: Setting Up Your Project
1. Create a new directory for your project:
`mkdir my-dapp
cd my-dapp`

2. Initialize a new Node.js project:
`npm init -y`
## Step 2: Configuring Tenderly
1. Install the Tenderly SDK as a dependency in your project:
`npm install @tenderly/sdk`
2. Import the Tenderly SDK and configure it with your account details:
`javascript
const { Tenderly, Network } = require("@tenderly/sdk");

const tenderly = new Tenderly({
  accountName: "your-account-name",
  projectName: "your-project-name",
  accessKey: "your-access-key",
  network: Network.Mainnet,
});`
## Step 3: Defining the Simulation Details
1. Define the transaction parameters for the simulation:
`const transactionParameters = {
  from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44f",
  input: "0x606060...",
  value: "1000000000000000000",
  gas: 21000,
  gas_price: "20000000000",
};`
2. Specify the simulation details:
`const simulationDetails = {
  transaction: transactionParameters,
  blockNumber: 12000000,
  override: {},
};`
## Step 4: Running the Simulation
Run the simulation using the Tenderly SDK's simulateTransaction method:
`(async () => {
  try {
    const simulationResult = await tenderly.simulator.simulateTransaction(simulationDetails);
    console.log("Simulation result:", simulationResult);
  } catch (error) {
    console.error("Error running simulation:", error);
  }
})();`


That's it! You've now learned how to integrate Tenderly simulations into your dapp using the Tenderly SDK. This allows you to test the behavior of your transactions without sending them on-chain, helping you identify potential issues and optimize your dapp's performance.

For more advanced features and detailed documentation, refer to the Tenderly SDK documentation.


This tutorial provides step-by-step instructions on setting up your project, configuring Tenderly, defining simulation details, and running the simulation using the Tenderly SDK. It serves as a comprehensive guide for developers who want to integrate Tenderly simulations into their decentralized applications.
