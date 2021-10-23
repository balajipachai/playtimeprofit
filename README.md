# playtimeprofit-contracts

# Pre-requisites

1. Create .secrets.json in the root of the project
2. Create an account on Infura grab the PROJECT ID
3. Create an account using Metamask
4. Copy the account Private Key and Infura PROJECT ID to .secrets.json file

```
{
    "TESTNET_PRIVATE_KEY": "Your account private key",
    "MAINNET_PRIVATE_KEY": "Your account private key",
    "INFURA_PROJECT_ID": "Infura Project Id"
}
```
----

**ABOVE STEPS SEEMS TOO MUCH, COMMENT OUT THE CONTENTS OF networks field FROM hardhat.config.js**

----
# Contract related commands

- Compile contracts `npm run compile`

- Deploy contracts

    - To deploy contracts on the local blockchain first run `npm run hhn` in a terminal then open another tab in the terminal and `npm run deploy-local`

    - To deploy on either `Testnet` or `Mainnet` before executing the deploy script ensure to add account private key & infura project ID in `.secrets.json` file else the `deploy-*` scripts will fail

    - Available deployment scripts are

        - deploy-local
        
        - deploy-eth-mainnet

        - deploy-eth-testnet
        
        - deploy-bsc-mainnet

        - deploy-bsc-testnet

----
