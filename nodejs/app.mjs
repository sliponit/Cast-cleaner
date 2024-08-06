import { getSSLHubRpcClient } from '@farcaster/hub-nodejs';

const hubRpcEndpoint = 'hub-grpc.pinata.cloud';
const client = getSSLHubRpcClient(hubRpcEndpoint);

client.$.waitForReady(Date.now() + 5000, (e) => {
  if (e) {
    console.error(`Failed to connect to ${hubRpcEndpoint}:`, e);
    process.exit(1);
  } else {
    console.log(`Connected to ${hubRpcEndpoint}`);

    client.getCastsByFid({ fid: 6023 }).then((castsResult) => {
      castsResult.map((casts) => console.log(casts.messages));
      client.close();
    });
  }
});

