# Cast-cleaner

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

`old-nodejs` contains code to list casts from a fid - does not require fid, for testing purposes