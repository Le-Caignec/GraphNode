# Generate Subgraph from an existing Smart Contract

Begin to init thegraph framework.

```
graph init
```

The the différent info & name that you want. Be carreful to enter the right smart contract address that you want to triger.
If you want to publish on graph studio node chose it (only for Ethereum Mainnet or Goerli, BNB, Optimism & Optimism Goerli). If you want to use an another network use : Hosting Service and you create the following architecture (notice that API & DB are automaticaly created).

![Alt text](/assets/image.png 'Hosting ser')

## Graph Studio

And you have finishing editing the schema.graphql & subgraph.yaml files. Type the following command

```
graph codegen && graph build
```

Then you have to write ./src/bays.ts files in order to update the graph when new events appear. In this way,
it will always be up to date.

### Deploy the subgraph

Here is the command that you need to use to authenticate from the CLI:

```
graph auth --studio <DEPLOY KEY>
```

DEPLOY KEY = given when you created your subgraph on graph studio UI

Here is the CLI command that you need to use to deploy your subgraph.

```
graph deploy --studio <SUBGRAPH_SLUG>
```

SUBGRAPH_SLUG = name of the subgraph that you created on graph studio UI( write it in lower case in the CLI)

# Create Your own Grah Node

There are two ways you can set up a Graph Node: you can use Docker to run an all-in-one image, or you can run their Rust implementation. The steps described in this guide will only cover the Docker alternative, as it is more convenient, and you can set up a Graph Node very quickly.
https://docs.moonbeam.network/node-operators/indexer-nodes/thegraph-node/

## Rust Implementation 


### Hosted services on developpment 

### Hosted services on production


## Docker Implementation 


### Hosted services on developpment 

### Hosted services on production




