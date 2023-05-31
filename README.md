# The BitPalace Protocol Contract
**A FVM compatible base Data DAO contract with an example that demonstrates one way of implementing a Data DAO on Filecoin.**

This repo contains the base Data DAO contract of BitPalace Protocol.

### Clone the repo

```sh
git clone https://github.com/bitpalace/contracts.git
```

### Install the node modules

```sh
yarn 
# or
npm install
```

### Deploy
```sh
yarn hardhat run scripts/0_deploy_token.ts --network hyperspace

# task
npx hardhat balance --account 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 10000.0 ETH
```

### The Data DAO Contract

The folder structure of the [Data DAO contract](https://github.com/bitpalace/contracts/tree/main/contracts/data-dao) is as below

    .
    ├── base                        # Base Contracts
    │   ├── DataDAOConstants.sol    # Constants
    │   └── DataDAOCore.sol         # Core functions integrated with filecoin.sol
    ├── interfaces                  # Interfaces
    │   ├── IDataDAO.sol            # Interface for Data DAO contract
    ├── DataDAO.sol                 # The Base Data DAO contract
    └── DataDAOExample.sol          # An example implementation of Base Data DAO contract

## Functionality and possible customization

The deal is tracked by the following deal states

    - Proposed
    - Passed 
    - Rejected   
    - Active        
    - Expired
    
> Add a user

This function assigns the role to the user that is being added to the DAO, the rules to and right to add the user can be customized in the implementation contract
  
> Create a new deal proposal

This function is used to create a new deal, the restrictions on who can create a deal can be fully customized in the implementation contract.

> Approve or Reject the proposal

This function is responsible to set the state of the deal to Passed or Rejected. A simple voiting mechanism can be implemented to decide the fate of the deal.

> Activate the deal

The function seeks verification from the contract on the storage provider's claim that the deal was created on Filecoin Network and the data is being stored. 

> Reward

This function can be found inside the DataDAOCore.sol file, and is responsible to send $FIL to the storage provider. The districution of the $FIL and the time of release of the funds can be customized in the implementation contract.


## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network hyperspace scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network hyperspace DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
