# Tenderly Simulation Example

Walkthrough: [Unleashing the Power of Tenderly Simulations for Optimal Dapp Development and Transaction Testing](https://medium.com/@amywal/unleashing-the-power-of-tenderly-simulations-for-optimal-dapp-development-and-transaction-fc30d985e4e6)

This repo shows how to run a transaction simulation with the Tenderly SDK. Use it alongside the article above.

## Prerequisites

- **Node.js** — this repo has no `package.json` or engines field. Use a current Node LTS (18 or newer is a safe default). You need `node` and `npm` on your PATH.
- **A Tenderly account** — sign up at [tenderly.co](https://tenderly.co) if you do not have one.
- **Account slug, project slug, and access key** — in the Tenderly dashboard:
  - Open your project. The URL looks like `https://dashboard.tenderly.co/{accountSlug}/{projectSlug}/...`. Those path segments are the account and project slugs (`accountName` and `projectName` in the SDK).
  - Create an access key under **Settings → Authorization** (or **Access Tokens**), depending on your dashboard layout.
- **Keep the access key out of the repo.** Prefer an environment variable (see Usage below). Do not commit real keys.

## Examples

- [basic-simulation.js](examples/basic-simulation.js) — runs a basic transaction simulation with the Tenderly SDK.
- [advanced-simulation.js](examples/advanced-simulation.js) — **placeholder only; not implemented yet.** Do not expect it to run. A real advanced example may be added later.

SDK docs: [How to simulate transactions with Tenderly SDK](https://docs.tenderly.co/tenderly-sdk/tutorials-and-quickstarts/how-to-simulate-transactions-with-tenderly-sdk).

## Usage

1. Install Node.js if you have not already.
2. Clone this repository:

```bash
git clone https://github.com/hakierka/TenderlySDK-example.git
```

3. Enter the repo:

```bash
cd TenderlySDK-example
```

4. Install the SDK:

```bash
npm install @tenderly/sdk
```

5. Set your Tenderly details in `examples/basic-simulation.js`:
   - Replace `accountName` and `projectName` with your account and project slugs.
   - The file currently hard-codes a placeholder access key (`"your-access-key"`). Change that line to read from an env var instead of putting a real key in the file:

```js
accessKey: process.env.TENDERLY_ACCESS_KEY,
```

   Then export the key in your shell (do not commit it):

```bash
export TENDERLY_ACCESS_KEY="your-real-access-key"
```

6. Run the basic example:

```bash
node examples/basic-simulation.js
```

You need a valid Tenderly account and the values above for the simulation to succeed.

More docs: [Tenderly documentation](https://docs.tenderly.co/).

## What you will see

TODO(ask Amy): a real simulation was not run here (needs Amy's Tenderly account / access key). Please run:

```bash
export TENDERLY_ACCESS_KEY="…"   # after applying the env-var change above
# set accountName / projectName in examples/basic-simulation.js
node examples/basic-simulation.js
```

Then paste the successful console output (or a redacted sample) into this section so readers know what a good run looks like.
