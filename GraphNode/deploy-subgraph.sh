#!/bin/bash
cd ../Subgraph

# bellecour
graph create bellecour --node http://127.0.0.1:8020
graph deploy bellecour --node http://127.0.0.1:8020 --ipfs http://127.0.01:5001

echo "browse bellecour subgraph at http://localhost:8000/subgraphs/name/ERC721"
