# Containerized graphnodes

## Prerequisites:

- install **graph** cli: `npm i -g @graphprotocol/graph-cli` or alias the local install
- blockchain specific:
  - for **bellecour graphnodes**, a `bellecour-archive-node` docker service must expose `8545` on network `bellecour_blockchain`

## Usage

```sh
# start the graphnode with the dependencies
docker-compose up -d

# deploy the subgraphs on the graphnode
./deploy-subgraph.sh
```
