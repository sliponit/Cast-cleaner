# Cast-cleaner

This project is a script to remove old casts. It uses the Typescript interface for Farcaster Hubs to list all casts and delete those which are older than 7 days. The project is unfinished, the user needs to enter the mnemonic pass phrase for its farcaster account in an environment file and run the script. A UI with a auth screen to log in to farcaster and get a signer key is missing, I did not have time to implement this UI.

The project is a fork from the repo https://github.com/farcasterxyz/hub-monorepo/tree/main/packages/hub-nodejs/examples/write-data. Environment variables are grouped in an env file but again a UI would need to handle those especially through an auth screen to farcaster.

Code is in `./node.js` (Repo fork from `https://github.com/farcasterxyz/hub-monorepo/tree/main/packages/hub-nodejs/examples/write-data`)

1. `cd  ./node.js`
2. Create `.env` with
```
MNEMONIC="FC_ACCOUNT"
OP_PROVIDER_URL="FROM_ALCHEMY_OR_ALTERNATIVE"
SIGNER_PRIVATE_KEY="EMPTY_TO_CREATE_A_NEW_ONE"
```
3. Run `yarn install` to install dependencies
4. Run `yarn start`

`old-nodejs` contains code to list casts from a fid - does not require signer, for testing purposes