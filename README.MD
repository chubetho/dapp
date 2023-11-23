# Dapp

## Requirements

1. **Node.js and npm Installation**
   - Install Node.js and npm from [here](https://nodejs.org/).

2. **pnpm Installation**
   - Once Node.js is installed, globally install `pnpm` by running:
     ```
     npm install -g pnpm
     ```

3. **Metamask Extension Setup**
   - Install the Metamask browser extension from [here](https://metamask.io/download.html).

## How to Run

1. **Install Dependencies**
     ```
     pnpm install
     ```

2. **Run Backend Services**

   - Navigate to the `/backend` directory.

   - For the initial setup (required only if contracts are edited):
     ```
     pnpm build
     ```

   - Run the following commands in separate terminals:
     ```bash
     pnpm node
     ```
     ```
     pnpm deploy:local
     ```

3. **Run Frontend**

   - Navigate to the `/frontend` directory and run:
     ```
     pnpm dev
     ```

4. **Setup MetaMask**

   - Add a custom network with the following details:
     - URL: http://127.0.0.1:8554
     - ChainId: 1337
     - Currency: ETH

   - Add the account using this private key `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`.

5. **Access the Application**

   - Open your browser and enter the following URL:
     [http://localhost:5173/](http://localhost:5173/)

> Ensure all terminals remain active to keep both frontend and backend services running.