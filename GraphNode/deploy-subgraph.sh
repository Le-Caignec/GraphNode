#!/bin/bash
cd ../Subgraph

# bellecour
graph create bellecour --node http://127.0.0.1:8020
graph deploy bellecour subgraph.yaml --node http://127.0.0.1:8020 --ipfs http://127.0.01:5001 --version-label 0.0.1

echo "browse bellecour subgraph at http://127.0.0.1:8000/subgraphs/name/bellecour/poco/graphql"
