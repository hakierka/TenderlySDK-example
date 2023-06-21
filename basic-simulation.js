const { Tenderly, Network } = require("@tenderly/sdk");

const tenderly = new Tenderly({
  accountName: "your-account-name",
  projectName: "your-project-name",
  accessKey: "your-access-key",
  network: Network.Mainnet,
});

const transactionParameters = {
  from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44f",
  input: "0x606060...",
  value: "1000000000000000000",
  gas: 21000,
  gas_price: "20000000000",
};

const simulationDetails = {
  transaction: transactionParameters,
  blockNumber: 12000000,
  override: {},
};

(async () => {
  try {
    const simulationResult = await tenderly.simulator.simulateTransaction(simulationDetails);
    console.log("Simulation result:", simulationResult);
  } catch (error) {
    console.error("Error running simulation:", error);
  }
})();
