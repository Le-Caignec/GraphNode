import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import {
    ERC721,
    Transfer,
} from "../generated/NFT_Bellecour/ERC721"
import { Owner, Token, TokenContract } from "../generated/schema"
import { normalize } from "./helper";

export function handleTransfer(event: Transfer): void {
    let tokenId = event.params.tokenId;
    let id = event.address.toHex() + '_' + tokenId.toString();
    let contractId = event.address.toHex();

    let contract = ERC721.bind(event.address);
    let tokenContract = TokenContract.load(contractId);
    if (tokenContract == null) {
        tokenContract = new TokenContract(contractId)
        tokenContract.isLikelyERC1155 = false
        let name = contract.try_name();
        if (!name.reverted) {
            tokenContract.name = normalize(name.value);
        }
        let symbol = contract.try_symbol();
        if (!symbol.reverted) {
            tokenContract.symbol = normalize(symbol.value);
        }
        tokenContract.save()
    }

    let token = Token.load(id)
    if (token == null) {
        token = new Token(id)
        token.contract = tokenContract.id;
        token.tokenID = tokenId;
        token.mintTime = event.block.timestamp;
        let metadataURI = contract.try_tokenURI(tokenId);
        if (!metadataURI.reverted) {
            token.tokenURI = normalize(metadataURI.value);
        } else {
            let metadataURI = contract.try_tokenURI(tokenId);
            if (!metadataURI.reverted) {
                token.tokenURI = normalize(metadataURI.value);
            } else {
                token.tokenURI = "";
            }
        }
        token.save()
    }

    if (event.params.from != Address.zero()) {
        log.warning("zero address", [])

        let from = Owner.load(event.params.from.toHex())
        if (from == null) {
            from = new Owner(event.params.from.toHex())
            from.save()
        }

    }
}